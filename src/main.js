import Vue from 'vue'
import App from './App.vue'

//引入Bootstrap-vue和bootstrap
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue);//在全局注册组件

// 引入axios
import {
  axios_instance
} from "./util/axios"
// 使用示例: this.$axios.get();
Vue.prototype.$axios = axios_instance;

//是否为线上环境
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
