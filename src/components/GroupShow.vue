<template>
  <el-row :gutter="20" style="margin-top: 20px;">
    <el-col :span="24" v-for="group in filteredGroups" :key="group.id">
      <el-card>
        <span class="group-name">Group {{ group.team_name }}</span>
        <el-button type="info" plain @click="goToGroup(group.id, courseName)">Group detail</el-button>
        <el-collapse v-model="group.expanded">
          <el-collapse-item>
            <!-- <p>Project ID: {{ group.id }}</p> -->
            <p>Major Name: {{ group.major }}</p>
            <p>Capacity: {{ group.capacity }}</p>
            <p>Course Name: {{ group.course_name }}</p>
            <p>Deadline: {{ group.deadline }}</p>
            <p v-if="group.users && group.users.length > 0">
              Group members:
              <ul>
                <li v-for="user in group.users" :key="user.email">
                  {{ user.student_name }} ({{ user.email }})
                </li>
              </ul>
            </p>
            <p v-else>No users in this group</p>
            <p>
              Project URL: <a :href="group.url" target="_blank">{{ group.url }}</a>
            </p>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      search: '',
      groups: [],
      courseName: '' // 添加 courseName 到 data 中
    };
  },
  computed: {
    filteredGroups() {
      return this.groups.filter(group => group.team_name.toString().toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  methods: {
    fetchGroups(courseName) {
      axios.get(`http://localhost:8080/demo/teams/get/${courseName}`)
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.groups = response.data.data.map(group => ({
              ...group,
              expanded: false
            }));
            this.courseName = courseName; // 存储 courseName 到 data 中
          } else {
            console.error('Unexpected response data format:', response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching groups:', error);
        });
    },
    goToGroup(groupId, courseName) {
      this.$router.push({ name: 'CommitHistory', params: { projectId: groupId, id: courseName } });
    }
  },
  created() {
    const courseName = this.$route.params.id; // 确保正确获取路由参数
    if (courseName) {
      this.fetchGroups(courseName);
    } else {
      console.error('courseName is not defined');
    }
    const storedCourseName = sessionStorage.getItem('courseName'); // 从 sessionStorage 中获取 courseName
    if (storedCourseName) {
      this.fetchGroups(storedCourseName);
      sessionStorage.removeItem('courseName'); // 清除 sessionStorage 中的 courseName
    } else {
      console.error('courseName is not defined');
    }
  }
};
</script>

<style>
.group-name:hover {
  color: #66b1ff; /* Hover link color, you can change it */
  text-decoration: underline; /* Adds underline on hover */
}

.group-name {
  font-size: 16px;
  font-weight: bold;
}

.el-button {
  margin-left: 10px;
  font-size: 14px;
  padding: 6px 12px;
}
</style>
