<template>
    <el-container>
     <el-header>
      <GoBackButton></GoBackButton>
     </el-header>
     <el-main>
         <EditCourseFormDetail></EditCourseFormDetail>
     </el-main>
     <el-footer>Footer</el-footer>
   </el-container>
 </template>
 
 <script>
 import GoBackButton from '../components/GoBackButton.vue'
 import EditCourseFormDetail from '../components/EditCourseFormDetail.vue'
 export default {
  components:{
     GoBackButton,
     EditCourseFormDetail
  }
 }
 </script>