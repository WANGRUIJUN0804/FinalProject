import Vue from 'vue'
//引入Vue
import App from './App.vue'
//引入app组件
Vue.config.productionTip = false
//关闭生产提示
new Vue({
  el:'#app',
  //将app放入容器中
  render: h => h(App),
})
//最先执行的 