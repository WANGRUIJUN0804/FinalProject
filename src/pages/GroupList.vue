<template>
    <el-container>
    
     <el-header>
      <GoBackButton></GoBackButton>
     </el-header>
     <el-main>
      <GroupShow></GroupShow>
     </el-main>
     <el-footer>Footer</el-footer>
   </el-container>
 </template>
 
 <script>
 import GoBackButton from '../components/GoBackButton.vue'
 import GroupShow from '../components/GroupShow.vue'
 export default {
  components:{
     GoBackButton,
     GroupShow
  }
 }
 </script>