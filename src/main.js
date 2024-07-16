import Vue from 'vue'
//引入Vue
import App from './App.vue'
//引入app组件
//引入ElmentUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router'
import locale from 'element-ui/lib/locale/lang/en'; 
//完整引入太大了
// import { Button, Select } from 'element-ui';
Vue.use(VueRouter)
Vue.config.productionTip = false
//关闭生产提示
//应用ElmentUI
Vue.use(ElementUI, { locale });
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
new Vue({
  el:'#app',
  //将app放入容器中
  render: h => h(App),
  router:router
})
//最先执行的 