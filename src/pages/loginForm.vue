<template>
  <el-container class="login_container">
    <div class="left-side">
      <img src="../assets/logo.png" alt="background image">
    </div>
    <div class="right-side">
      <div class="login-box">
        <div class="login_form">
          <div class="text">Welcome back</div>
          <el-form :model="loginForm" ref="loginForm" label-width="80px">
            <el-form-item label="Email">
              <el-input v-model="loginForm.nusEmail" placeholder="Enter your email"></el-input>
            </el-form-item>
            <el-form-item label="Code">
              <el-input v-model="loginForm.code" placeholder="Enter the code">
                <template slot="append">
                  <el-button type="primary" @click="sendCode" :disabled="loading">
                    <span v-if="!loading">Send Code</span>
                    <span v-else>Sending...</span>
                  </el-button>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class="btns">
              <el-button type="primary" @click="submitForm">Submit</el-button>
              <el-button type="primary" @click="next">Next</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';


Vue.use(ElementUI);

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      loginForm: {
        nusEmail: '',
        code: ''
      },
      loading: false
    };
  },
  methods: {
    sendCode() {
      if (!this.loginForm.nusEmail) {
        this.$message.error('Please enter your email');
        return;
      }
      this.loading = true;

      const params = new URLSearchParams();
      params.append('nusEmail', this.loginForm.nusEmail);

      axios.post('/login/users/code', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(() => {
        this.$message.success('Code sent successfully');
      })
      .catch(() => {
        this.$message.error('Failed to send code');
      })
      .finally(() => {
        this.loading = false;
      });
    },
 
    async submitForm() {
      try {
        const response = await axios.post('/login/users/login/email', {
          schoolEmail: this.loginForm.nusEmail,
          code: this.loginForm.code
        });
        console.log(response.data)
        if (response.data && response.data.data) {
          localStorage.setItem('userId', response.data.data.userId);
          localStorage.setItem('username', response.data.data.username);
          // Save the userId and username in Vuex store
       

          // Redirect to Home
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        console.error('Error logging in:', error);
        this.$message.error('Login failed');
      }
    },
    next(){
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style lang="less" scoped>
.left-side {
  flex: 1;
  height: 95vh;
  background-color: #0e1729;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-side img {
  max-width: 100%;
  object-fit: cover;
}

.right-side {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}

.login-box {
  width: 360px;
  height: 240px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.text {
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  font-family: 宋体;
}
</style>
