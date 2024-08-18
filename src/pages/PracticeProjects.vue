<template>
    <!-- 可以快速生成模板的 -->
    <el-container>
     
        <el-header style="text-align: right; font-size: 12px">
            <AddCourseButton></AddCourseButton>
        </el-header>
        <el-main>
         <CourseTable></CourseTable>
       </el-main>
       <el-footer>
        <!-- <pagination></pagination> -->
    
       </el-footer>
    </el-container>
</template>

<script>
import CourseTable from '../components/CourseTable.vue';
// import Pagination from '../components/Pagination.vue';
import AddCourseButton from '../components/AddCourseButton.vue'

export default {
    name: 'PracticeProjects',
    components: {
        CourseTable,
        // Pagination,
        AddCourseButton
    }
};
</script>
