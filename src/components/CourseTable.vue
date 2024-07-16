<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="deadline"
      label="Deadline"
      min-width="150">
    </el-table-column>
    <el-table-column
      prop="taskName"
      label="Practice Project Name"
      min-width="300">
    </el-table-column>
    <el-table-column
      prop="moduleName"
      label="Module ID"
      min-width="120">
    </el-table-column>
    <!-- <el-table-column
      prop="studentNumber"
      label="Student Number"
      min-width="150">
    </el-table-column> -->
    <el-table-column
      prop="allowedAttempts"
      label="Allowed Attempts"
      min-width="150">
    </el-table-column>
    <el-table-column
      prop="availablePeriod"
      label="Available"
      min-width="300">
    </el-table-column>
    <el-table-column
      prop="majorName"
      label="Major"
      min-width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Actions"
      min-width="150">
      <template v-slot="scope">
        <el-button @click="handleClick('view', scope.row)" type="text" size="small">View</el-button>
        <el-button @click="handleClick('edit', scope.row)" type="text" size="small">Edit</el-button>
        <el-button @click="handleClick('delete', scope.row)" type="text" size="small">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    handleClick(action, row) {
      if (action === 'view') {
        console.log(row.moduleName);
        this.$router.push({ name: 'GroupList' });
      }
      if (action === 'edit') {
        console.log(row);
        this.$router.push({ name: 'EditCourseForm', params: { id: row.id } });
      }
      if (action === 'delete') {
        this.deleteTask(row.id);
      }
    },
    fetchTableData() {
      axios.get('/api/tasks/get/all/1')
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.tableData = response.data.data.map(item => ({
              ...item,
              availablePeriod: `${item.availableTime} - ${item.unavailableTime}`
            }));
          } else {
            console.error('Unexpected response data format:', response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching table data:', error);
        });
    },
    deleteTask(id) {
      axios.delete(`/api/tasks/delete/${id}`)
        .then(() => {
          console.log('Task deleted successfully!');
          // Refresh the table data after deletion
          this.fetchTableData();
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
    }
  },
  created() {
    this.fetchTableData();
  }
};
</script>

<style scoped>
.float-right {
  float: right;
}
</style>
