<template>
  <div class="path404">
    <el-empty :image-size="320"
              description="您当前没有此菜单！">
      <el-button type="primary"
                 @click="routerClick">返回</el-button>
    </el-empty>
  </div>
</template>
<script>
export default {
  name: 'path404',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    routerClick () {
      // this.$router.push({ name: 'general' })
    }
  }
}
</script>
<style lang="scss">
.path404 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-empty__description p {
    font-size: 16px;
  }
}
</style>
