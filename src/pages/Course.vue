<template>
    <b-container>
        <!-- 面包屑 -->
        <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
        <!-- 课程等级 -->
        <TypeNav></TypeNav>
        <b-row class="mb-5" v-for="(item,index) in list" :key="index">
            <b-col cols="3">
                <router-link to="">
                    <img class="img-fluid" :src="require(`../assets/images/${item.pic}`)" alt="">
                </router-link>
            </b-col>
            <b-col cols="5" class="course-desc">
                <h3>{{item.title}}</h3>
                <p>讲师：{{item.tname}}</p>
                <p>课时：{{item.cLength}}</p>
                <p>开课时间：{{item.startTime}}</p>
                <p>上课地点：{{item.address}}<a href="">查看各校区地址</a></p>
            </b-col>
            <b-col cols="2">
                <h2 class="text-danger my-5">¥ {{item.price}}</h2>  
            </b-col>
            <b-col cols="2">
                <router-link to="" class="btn btn-success my-5">
                    查看详情
                </router-link>
            </b-col>
        </b-row>
        <!-- 分页导航 -->
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router>
        </b-pagination-nav>    
    </b-container>  
</template>

<script>
import TypeNav from '../components/TypeNav'
export default {
    name:"Course",
    data(){
        return{
            list:[],
            curPage:1,    //当前页码
            pageSize:3,   //单页记录数
            total:0,      //总的记录数
            pageTotal:0,   //总页数
            items: [
                {
                    text: '首页',
                    to: {name:"home"}
                },
                {
                    text: '全部课程',
                    active:true
                }
            ]
        }
    },
    methods: {
        getTypeNav(){
            this.$axios.get("/type").then(res => {

            }).catch()
        },
        getCourses(){
            console.log(this.$route);
            this.$axios.get("/course/list",{
                params:{
                    // pageNum:this.$route.query.curPage
                    curPage:this.curPage
                }
            })
            .then(res => {
                console.log(res);
                if(res.data.code == 200){
                    this.list = res.data.data.list;
                    // this.pageSize = res.data.data.pageSize;
                    this.total = res.data.data.total;
                    this.pageTotal = res.data.data.pageTotal;
                }
            }).catch(err => {
                console.log(err);
            });
        },
         // pageNum是当前页码
        linkGen(pageNum) {
            // 请求地址: /course?curPage=1
            // 在Vue中如何做页面跳转???
            return {path: `/course?curPage=${pageNum}`}
        }
    },
    mounted() {
        //组件挂载完成后，给参数赋值
        this.curPage = this.$route.query.curPage;
        this.getCourses();
    },
}
</script>

<style>
.course-desc > p {
  margin: 0;
}
.breadcrumb-item + .breadcrumb-item::before {
    content: ">" !important;
}
</style>