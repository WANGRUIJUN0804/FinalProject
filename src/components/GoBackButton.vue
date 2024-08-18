<template>
       <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left" @click="goBack">Last Page</el-button>
        </el-button-group>
</template>
<script>
export default {
    
  methods: {
    goBack() {
      this.$router.go(-1); // 返回上一页
      
    }
  }
}
</script>