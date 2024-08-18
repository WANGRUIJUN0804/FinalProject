<template>
    <el-container>
   
     <el-header>
      <GoBackButton></GoBackButton>
     </el-header>
     <el-main>
       <div class="progress-container">
     <el-steps :active="2" class="custom-steps" >
       <el-step title="Step 1" description="Task Setting" finish-status="success"></el-step>
       <el-step title="Step 2" description="Team Setting"></el-step>
     </el-steps>
   </div>
       <TeamSettingForm></TeamSettingForm>
     </el-main>
     <!-- <el-footer>Footer</el-footer> -->
   </el-container>
 </template>
 <script>
import TeamSettingForm from '@/components/TeamSettingForm.vue'
 import GoBackButton from '../components/GoBackButton.vue'

 export default {
  components:{
     GoBackButton,
     TeamSettingForm,
  }
 }
 </script>
 <style>
 .progress-container {
    width: 80%; 
   margin: 30px auto; /* 上下各留出20px的距离 */
 }
 
 </style>