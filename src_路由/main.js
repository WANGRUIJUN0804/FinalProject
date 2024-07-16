import Vue from 'vue'
//引入Vue
import App from './App.vue'
//引入app组件
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
//关闭生产提示
//应用插件
Vue.use(VueRouter)
new Vue({
  el:'#app',
  //将app放入容器中
  render: h => h(App),
  router:router
})
//最先执行的 