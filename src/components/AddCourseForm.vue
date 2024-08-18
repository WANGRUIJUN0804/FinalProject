<template>
  <el-form ref="form" :model="sizeForm" label-width="200px" size="mini">
    <el-form-item label="Practice Project Name">
      <el-input v-model="sizeForm.taskName"></el-input>
    </el-form-item>
    <el-form-item label="Module ID">
      <el-input v-model="sizeForm.moduleName"></el-input>
    </el-form-item>
    <el-form-item label="Major">
      <el-select v-model="sizeForm.majorName" placeholder="Please Choose Major">
        <el-option label="SE" value="SE"></el-option>
        <el-option label="EBAC" value="EBAC"></el-option>
        <el-option label="AIS" value="AIS"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="DeadLine">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="Pick a day" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="Select Time" v-model="sizeForm.time1" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="Available">
      <el-date-picker
        v-model="sizeForm.date2"
        type="datetimerange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Allowed attempts">
      <el-input v-model="sizeForm.allowedAttempts" type="number"></el-input>
    </el-form-item>
    <!-- <el-form-item label="Lecturer ID">
      <el-input v-model="sizeForm.lecturerId" type="number"></el-input>
    </el-form-item> -->
    <el-form-item label="Task Description">
      <el-input v-model="sizeForm.taskDescription"></el-input>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" class="float-right" @click="onSubmit">Submit</el-button>
      <!-- <el-button type="primary" class="float-right" @click="nextPage">NEXT</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';
import { EventBus } from '../../eventBus';

export default {
  data() {
    return {
      sizeForm: {
        taskName: '',
        moduleName: '',
        majorName: '',
        date1: '',
        time1: '',
        date2: [],
        allowedAttempts: 0,
        lecturerId: 0,
        taskDescription: '',
      },
    };
  },
  methods: {
    nextPage(){
      this.$router.push({ 
      name: 'TeamSetting',
      params: { 
        moduleName: this.sizeForm.moduleName,
        majorName: this.sizeForm.majorName
      }
    });  
    // eslint-disable-next-line no-undef
    console.log(this.sizeForm.moduleName);
            },
    formatDate(date) {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      const day = (`0${d.getDate()}`).slice(-2);
      return `${year}-${month}-${day}`;
    },
    formatTime(time) {
      const t = new Date(time);
      const hours = (`0${t.getHours()}`).slice(-2);
      const minutes = (`0${t.getMinutes()}`).slice(-2);
      const seconds = (`0${t.getSeconds()}`).slice(-2);
      return `${hours}:${minutes}:${seconds}`;
    },
    formatDateTime(date, time) {
      return `${this.formatDate(date)} ${this.formatTime(time)}`;
    },
    onSubmit() {
      const userId = localStorage.getItem('userId');
      const payload = {
        taskName: this.sizeForm.taskName,
        moduleName: this.sizeForm.moduleName,
        majorName: this.sizeForm.majorName,
        deadline: this.formatDateTime(this.sizeForm.date1, this.sizeForm.time1),
        availableTime: this.sizeForm.date2.length > 0 ? this.formatDateTime(this.sizeForm.date2[0], this.sizeForm.date2[0]) : '',
        unavailableTime: this.sizeForm.date2.length > 1 ? this.formatDateTime(this.sizeForm.date2[1], this.sizeForm.date2[1]) : '',
        allowedAttempts: this.sizeForm.allowedAttempts,
        lecturerId: userId,
        taskDescription: this.sizeForm.taskDescription,
        id: 0, // Assuming this should be set dynamically if needed
      };

      axios.post('/api/tasks/new', payload)
        .then(response => {
          console.log('Task created successfully!', response);
          EventBus.$emit('course-created', response.data.data);
          this.$router.push({ 
      name: 'TeamSetting',
      params: { 
        moduleName: this.sizeForm.moduleName,
        majorName: this.sizeForm.majorName
      }
    });   // 假设返回到任务列表页面
        })
        .catch(error => {
          console.error('Error creating task:', error);
        });
    }
  }
};
</script>

<style scoped>
.float-right {
  float: right;
}
</style>
