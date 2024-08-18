<template>
   <el-container>

    <el-header>
     <GoBackButton></GoBackButton>
    </el-header>
    <el-main>
      <div class="progress-container">
    <el-steps :active="1" class="custom-steps">
      <el-step title="Step 1" description="Task Setting"></el-step>
      <el-step title="Step 2" description="Team Setting"></el-step>
    </el-steps>
  </div>
        <AddCourseForm></AddCourseForm>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import GoBackButton from '../components/GoBackButton.vue'
import AddCourseForm from '../components/AddCourseForm.vue'
export default {
 components:{
    GoBackButton,
    AddCourseForm
 }
}
</script>
<style>
.progress-container {
   width: 60%; 
  margin: 30px 0; /* 上下各留出20px的距离 */
}

</style>