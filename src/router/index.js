//该文件用于创建整个项目的路由器
import VueRouter from "vue-router";
import daohang1 from '../pages/daohang1.vue';
import daohang4 from '../pages/daohang4.vue';
import AddCourse from '../pages/AddCourse.vue';
import PracticeProjects from "../pages/PracticeProjects.vue";
import CommitHistory from "../pages/CommitHistory.vue";
import GroupList from "../pages/GroupList.vue";
import EditCourseForm from "../pages/EditCourseForm.vue";
import TeamSetting from "../pages/TeamSetting.vue"
import loginForm from "@/pages/loginForm.vue";
import Home from "@/pages/Home.vue";
export default new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/login' // 默认重定向到登录页面
          },
        {  path:'/login',
            name:'Login',
            component:loginForm

        },
        {  path:'/home',
            name:'Home',
            component:Home

        },

        {  path:'/daohang1',
            name:'daohang1',
            component:daohang1

        },{
            path:'/PracticeProjects',
            name:'PracticeProjects',
            component:PracticeProjects
        },
        {
            path:'/daohang4',
            name:'daohang4',
            component:daohang4
        },
        {
            path:'/AddCourse',
            name:'AddCourse',
            component:AddCourse
        },
        {
            path:'/GroupList',
            name:'GroupList',
            component:GroupList
        },
        {
            path:'/CommitHistory',
            name:'CommitHistory',
            component:CommitHistory
        },
        { path: '/group/:id', 
          component: CommitHistory,
          name: 'CommitHistory' },
          {
            path:'/edit/:id',
            name:'EditCourseForm',
            component:EditCourseForm
        }, {
            path:'/TeamSetting',
            name:'TeamSetting',
            component:TeamSetting
        },
      

    ]
})
