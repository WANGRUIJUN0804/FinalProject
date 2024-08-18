<template>
    <el-button  @click="AddCourse" type="primary" icon="el-icon-circle-plus">Add</el-button>
</template>
<script>
    export default {
        methods: {
            AddCourse(){
                this.$router.push({ name: 'AddCourse' }); 
            }
        },
    }
</script>