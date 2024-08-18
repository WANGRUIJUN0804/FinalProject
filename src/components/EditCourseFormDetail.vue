<template>
  <el-form ref="form" :model="sizeForm" label-width="200px" size="mini">
    <el-row>
      <el-col :span="24">
        <el-form-item label="Practice Project Name">
          <el-input v-model="sizeForm.taskName" class="form-input"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item label="Module ID">
          <el-input v-model="sizeForm.moduleName" class="form-input"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item label="Major">
          <el-select v-model="sizeForm.majorName" placeholder="Please Choose Major" class="form-input">
            <el-option label="SE" value="SE"></el-option>
            <el-option label="EBAC" value="EBAC"></el-option>
            <el-option label="IS" value="IS"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item label="DeadLine">
          <el-date-picker type="datetime" placeholder="Pick a day" v-model="sizeForm.deadline" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item label="Available">
          <el-date-picker
            v-model="sizeForm.availableRange"
            type="datetimerange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            style="width: 100%">
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item label="Allowed Attempts">
          <el-input v-model="sizeForm.allowedAttempts" class="form-input"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item size="large">
          <el-button type="primary" class="float-right" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      sizeForm: {
        id: 0,
        taskName: '',
        moduleName: '',
        majorName: '',
        deadline: '',
        availableRange: [],
        availableTime: '',
        unavailableTime: '',
        allowedAttempts: 0,
        lecturerId: 0,
        taskDescription: '',
        createTime: '',
        updateTime: ''
      }
    };
  },
  created() {
    const id = this.$route.params.id;
    this.loadProjectData(id);
  },
  methods: {
    loadProjectData(id) {
      axios.get(`/api/tasks/get/lists`, { params: { ids: id } })
        .then(response => {
          const data = response.data.data[0]; // 假设返回的数据结构是一个数组
          this.sizeForm.id = data.id;
          this.sizeForm.taskName = data.taskName;
          this.sizeForm.moduleName = data.moduleName;
          this.sizeForm.majorName = data.majorName;
          this.sizeForm.deadline = new Date(data.deadline);
          this.sizeForm.availableRange = [new Date(data.availableTime), new Date(data.unavailableTime)];
          this.sizeForm.allowedAttempts = data.allowedAttempts;
          this.sizeForm.lecturerId = data.lecturerId;
          this.sizeForm.taskDescription = data.taskDescription;
          this.sizeForm.createTime = data.createTime;
          this.sizeForm.updateTime = data.updateTime;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    formatDateTime(date) {
      if (!date) return '';
      const d = new Date(date);
      const year = d.getFullYear();
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      const day = (`0${d.getDate()}`).slice(-2);
      const hours = (`0${d.getHours()}`).slice(-2);
      const minutes = (`0${d.getMinutes()}`).slice(-2);
      const seconds = (`0${d.getSeconds()}`).slice(-2);
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    onSubmit() {
      const payload = {
        id: this.sizeForm.id,
        taskName: this.sizeForm.taskName,
        moduleName: this.sizeForm.moduleName,
        majorName: this.sizeForm.majorName,
        deadline: this.formatDateTime(this.sizeForm.deadline),
        availableTime: this.formatDateTime(this.sizeForm.availableRange[0]),
        unavailableTime: this.formatDateTime(this.sizeForm.availableRange[1]),
        allowedAttempts: this.sizeForm.allowedAttempts,
        lecturerId: this.sizeForm.lecturerId,
        taskDescription: this.sizeForm.taskDescription,
        updateTime: this.formatDateTime(new Date())
      };
      axios.put('/api/tasks/update', payload)
        .then(() => {
          console.log(payload)
          this.$router.push({ name: 'PracticeProjects' }); 
          console.log('Task updated successfully!');
        })
        .catch(error => {
          console.log(payload);
          console.error('Error updating task:', error);
        });
    }
  }
};
</script>

<style scoped>
.form-input {
  width: 100%;
  max-width: 300px;
}
.float-right {
  float: right;
}
</style>
