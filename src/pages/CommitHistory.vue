<template>
   <el-container>
    <el-header>
     <GoBackButton></GoBackButton>
    </el-header>
    <el-main>
        <h1>url:{{ url }}</h1>
        <h1>Group Details for Group ID: {{ groupId }}</h1>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import GoBackButton from '../components/GoBackButton.vue'
import axios from 'axios';
export default {
    data() {
    return {
      groupId: null,
      courseId: 2,
        url: 'this is a url'
    };
  },
  methods: {
    fetchUrl() {
      axios.get('/api/get_data', {
        params: {
          group_id: this.groupId,
          course_id: this.courseId
        }
      })
      .then(response => {
        this.url = response.data; // 假设响应数据中包含 `url` 字段
      })
      .catch(error => {
        console.error('Error fetching URL:', error);
      });
    }
  },
  created() {
    this.groupId = this.$route.params.id;
    // this.courseId = this.$route.params.courseId;
    this.fetchUrl();
  },
 components:{
    GoBackButton,
 }
}
</script>