<template>
  <el-form ref="form" :model="sizeForm" label-width="200px" size="mini">
    <el-form-item label="Deadline for Students to Join Groups">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="Pick a day" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="Select Time" v-model="sizeForm.time1" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="Maximum Team Size">
      <el-input v-model="sizeForm.maxTeamSize" type="number"></el-input>
    </el-form-item>
    <el-form-item label="Team Number">
      <el-input v-model="sizeForm.teamNumber" type="number"></el-input>
    </el-form-item>

    <el-form-item size="large">
      <el-button type="primary" class="float-right" @click="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';

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
        maxTeamSize: 0,
        teamNumber: 0,
      },
    };
  },
  mounted() {
    if (this.$route.params.moduleName) {
      this.sizeForm.moduleName = this.$route.params.moduleName;
    }
    if (this.$route.params.majorName) {
      this.sizeForm.majorName = this.$route.params.majorName;
    }
  },
  methods: {
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
      const payload = {
        courseName: this.sizeForm.moduleName,
        major: this.sizeForm.majorName,
        deadline: this.formatDateTime(this.sizeForm.date1, this.sizeForm.time1),
        capacity: this.sizeForm.maxTeamSize,
        groupNumber: this.sizeForm.teamNumber,
      };

      axios.post('/demo/teams/create', payload)
        .then(response => {
          console.log('Task created successfully!', response);
          this.$router.push({ name: 'PracticeProjects' });
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
