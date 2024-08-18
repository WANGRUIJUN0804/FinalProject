<template>
  <el-container>
    <el-aside v-if="showSidebar" class="leftnav-container">
      <LeftNav class="leftnav"></LeftNav>
    </el-aside>
    <el-main :class="{ 'main-content': showSidebar }">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import LeftNav from './components/LeftNav.vue';
// import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    LeftNav
  },
  computed: {
    showSidebar() {
      return this.$route.name !== 'Login';
    }
  }
};
</script>

<style>
.leftnav-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  background-color: #2c3e50;
  z-index: 1000;
}

.main-content {
  margin-left: 320px;
  padding: 20px;
}

.main-content.no-sidebar {
  margin-left: 0;
}
</style>
