//引入组件
import Home from "../pages/Home";
import Teacher from "../pages/Teacher"
import Address from "../pages/Address"
import Course from "../pages/Course"


export const routes = [
    { path:"/",name:"home",component:Home },
    { path:"/address",name:"address",component:Address },
    { path:"/teacher",name:"teahcer",component:Teacher },
    { path:"/course",name:"course",component:Course }
];