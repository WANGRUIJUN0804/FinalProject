<template>
  <div>
    <!-- <LeftBar></LeftBar> -->
    <School></School>
    <Student></Student>
    <notification></notification>
  </div>
</template>

<script>
import School from './components/School.vue';

import Student from './components/Student.vue';
// import LeftBar from './components/LeftBar.vue';
import Notification from './components/notification.vue';
    export default {
      name:'App',
      components: {
         School,
        Student,
        // LeftBar,
          Notification,
      },
          
    }
</script>

<style>

</style>