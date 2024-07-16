<template>
    <!-- 组件的结构 -->
    <div class="demo">
      <h2>学校名称：{{ schoolName }}</h2>
      <h2>学校地址：{{ address }}</h2>
      <button @click="showName">
          点我提示学校名
      </button>

    </div>

</template>

<script>
  //组件交互的代码
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data(){
        return{
            schoolName:'shangguigu',
            address:'beijing'
                }

    },
    methods: {
        showName(){
           alert(this.schoolName)
        }
    }
  }

</script>

<style scoped>
/* 组件的样式 */
.demo{
    background-color:aqua;
}
</style>