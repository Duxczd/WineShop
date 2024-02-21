<template>
  <el-container class="mainBasis"
                v-loading="loading"
                :element-loading-text="loadingText">
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
}
</style>