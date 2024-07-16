//该文件用于创建整个项目的路由器
import VueRouter from "vue-router";
import About from '../components/About.vue'
import Home from '../components/Home.vue'
export default new VueRouter({
    routes:[
        {  path:'/about',
            name:'about',
            component:About

        },{
            path:'/home',
            component:Home
        }
    ]
})
