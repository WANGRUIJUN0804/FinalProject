
<template>
	<el-container>
		<el-aside  class="leftnav-container">
			<LeftNav class="leftnav"></LeftNav>
		</el-aside>

		<el-main class="main-content">
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script>
    import LeftNav from './components/LeftNav.vue';
    // import axios from 'axios'
    export default {
      name: 'App',  
      components: {
         LeftNav
      },
    }
</script>

<style>
.leftnav-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  background-color: #2c3e50; /* 根据需要调整背景颜色 */
  z-index: 1000; /* 确保固定导航栏在其他内容上方 */
}

.main-content {
  margin-left: 400px; /* 根据导航栏的宽度进行调整 */
  padding: 20px;
}
</style>
