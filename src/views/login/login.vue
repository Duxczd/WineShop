<template>
  <div class="login">
    <div class="login-bg"></div>
    <div class="login-box"></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .login-bg {
    width: 100%;
    height: 100%;
    background: url('../../assets/img/login_bg.jpeg') no-repeat;
    background-size: 100% 100%;
    position: absolute;
  }

  .login-box {
    position: relative;
    z-index: 2;
    margin-right: 80px;
    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.1);
    padding: 40px;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>