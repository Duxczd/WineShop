<template>
  <el-container class="mainBasis"
                v-loading="loading"
                :element-loading-text="loadingText">
    <el-aside class="mainBasis-aside">Aside</el-aside>
    <el-container>
      <el-header class="mainBasis-header">Header</el-header>
      <el-main class="mainBasis-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'mainBasis',
  data () {
    return {
      loading: false,
      loadingText: '正在加载中，请您耐心等待',
    }
  }
}
</script>

<style lang="scss">
.mainBasis {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f7f7f7;

  .mainBasis-aside {
    width: 240px !important;
    height: 100vh;
    background-color: #304156;
  }
  .mainBasis-header {
    height: 100px;
    background-color: #fff;
  }
  .mainBasis-main {
    background-color: #f0f2f5;
  }
}
</style>