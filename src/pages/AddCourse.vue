<template>
   <el-container>
    <el-header>
     <GoBackButton></GoBackButton>
    </el-header>
    <el-main>
        <AddCourseForm></AddCourseForm>
    </el-main>
    <el-footer>Footer</el-footer>
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