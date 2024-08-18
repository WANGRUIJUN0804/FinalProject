
<template>
  <div id="app">
    <header id="header">
      <div class="intro">
        <div class="container">
          <div class="row">
            <div class="intro-text">
              <h1>Hello, Welcome <span class="name">{{ username }}</span></h1>
              <p>ISS CODE HOSTING</p>
              <a href="#about" class="btn btn-default btn-lg page-scroll">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="nav">
      <nav class="navbar navbar-custom">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> 
              <i class="fa fa-bars"></i> 
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">{{ username }}</a>
          </div>
          <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul class="nav navbar-nav">
              <li class="hidden"> <a href="#page-top"></a> </li>
              <li> <a class="page-scroll" href="#about">Introduction</a> </li>
              <li> <a class="page-scroll" href="#skills">Functions</a> </li>
              <li> <a class="page-scroll" href="#portfolio"></a> </li>
              <li> <a class="page-scroll" href="#resume">Project list</a> </li>
              <li> <a class="page-scroll" href="#contact">Create Project</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div id="about">
      <div class="container">
        <div class="section-title text-center center">
          <h2>Introduction</h2>
          <hr />
        </div>
        <div class="row">
          <!-- <div class="col-md-12 text-center">
            <img src="img/about.jpg" class="img-responsive" />
          </div> -->
          <div class="col-md-8 col-md-offset-2">
            <div class="about-text">
              <p>The NUS ISS Code Hosting Platform is designed to provide faculty members with a comprehensive tool to monitor and evaluate student projects.  </p>
              <p>The platform focuses on key aspects such as Continuous Integration/Continuous Deployment (CI/CD) status, merge activities, and individual contributions.</p>
                <p> By offering detailed insights into each student's participation and project progression, the platform aims to enhance the project management experience and ensure efficient assessment of student performance.</p>
              <p class="text-center">
                <!-- <a class="btn btn-primary" href="#"><i class="fa fa-download"></i> Download Resume</a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="skills" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h2>Functions</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 skill">
            <span class="chart" data-percent="95">
              <span class="percent">95</span>
            </span>
            <h4>View Group list</h4>
          </div>
          <div class="col-md-4 col-sm-6 skill">
            <span class="chart" data-percent="85">
              <span class="percent">85</span>
            </span>
            <h4>View Project list</h4>
          </div>
          <div class="col-md-4 col-sm-6 skill">
            <span class="chart" data-percent="80">
              <span class="percent">80</span>
            </span>
            <h4>View Commit history</h4>
          </div>
          <div class="col-md-4 col-sm-6 skill">
            <span class="chart" data-percent="80">
              <span class="percent">80</span>
            </span>
            <h4>Create project</h4>
          </div>
          <div class="col-md-4 col-sm-6 skill">
            <span class="chart" data-percent="70">
              <span class="percent">70</span>
            </span>
            <h4>Create Group</h4>
          </div>
          <div class="col-md-4 col-sm-6 skill">
            <span class="chart" data-percent="65">
              <span class="percent">65</span>
            </span>
            <h4>Manage project</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- Other sections go here -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      username: ''
    };
  },
  mounted() {
    // 从localStorage中获取username
    this.username = localStorage.getItem('username') || 'Guest';
  }
};
</script>

<style scoped>
/* 把你的CSS样式放在这里 */
</style>
