<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="showName">
            点我提示学校名
        </button>
    </div>
</template>

<script>
  // 组件交互的代码
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 17
        }
    },
    methods: {
        showName() {
           alert(this.name)
        }
    }
  }
</script>

<style scoped>
/* 组件的样式 */

</style>
