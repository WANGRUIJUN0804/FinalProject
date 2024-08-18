<template>
  <div>
    <el-table
      :data="currentPageData"
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
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
      :page-size="pageSize"
      :current-page.sync="currentPage"
      @current-change="handlePageChange">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      currentPageData: []
    };
  },
  methods: {
    handleClick(action, row) {
      if (action === 'view') {
        console.log(row.moduleName);
        this.$router.push({ name: 'GroupList', params: { id: row.moduleName } });
      }
      if (action === 'edit') {
        console.log(row);
        this.$router.push({ name: 'EditCourseForm', params: { id: row.id } });
      }
      if (action === 'delete') {
        console.log(row.id)
        axios.delete(`/api/tasks/delete/${row.id}`)
      .then(response => {
        if (response.data && response.data.code === 200) { 
          this.$message.success('Task deleted successfully');
          this.fetchTableData(); 
        } else {
          this.$message.error('Failed to delete task');
          console.error('Unexpected response data format:', response.data);
        }
      })
      .catch(error => {
        this.$message.error('Error deleting task');
        console.error('Error:', error);
      });
      }
    },
    fetchTableData() {
      // eslint-disable-next-line no-unused-vars
      const userId = localStorage.getItem('userId');
      console.log(userId)
      axios.get(`/api/tasks/get/all/2`)
      
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.tableData = response.data.data.map(item => ({
              ...item,
              availablePeriod: `${item.availableTime} - ${item.unavailableTime}`
            }));
            this.updateCurrentPageData();
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
          this.fetchTableData();
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
    },
    handlePageChange(page) {
      this.currentPage = page;
      this.updateCurrentPageData();
    },
    updateCurrentPageData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.currentPageData = this.tableData.slice(start, end);
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
