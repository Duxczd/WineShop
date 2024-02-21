<template>
  <div class="login">
    <div class="login-box">
      <div class="login-text">酒之家</div>
      <div class="login-form-box">
        <el-form :model="loginForm"
                 :rules="rules"
                 class="login-form"
                 ref="loginForm"
                 @submit.native.prevent>
          <el-form-item prop="account"
                        class="login-form-input">
            <el-input v-model="loginForm.account"
                      placeholder="账号/手机号"
                      clearable></el-input>
          </el-form-item>
          <el-form-item prop="password"
                        class="login-form-input">
            <el-input type="password"
                      v-model="loginForm.password"
                      placeholder="密码"
                      clearable
                      @keyup.enter.native="submitForm('loginForm')"></el-input>
          </el-form-item>
          <el-button type="primary"
                     class="login-form-button"
                     :loading="loading"
                     @click="submitForm('loginForm')">{{ loading ? '登录中' : '登录' }}</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loading: false,
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号/手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.$router.push({ path: '/mainBasis' })
        } else {
          return false
        }
      })
    }
  },
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/login-bg.jpg') no-repeat;
  background-size: 100% 100%;

  .login-box {
    width: 400px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.1);
    padding: 40px;
    background-color: #fff;
    border-radius: 4px;
    opacity: .9;

    .login-text {
      font-size: 30px;
      font-weight: 700;
      color: #409eff;
      margin-bottom: 20px;
    }

    .login-form-box {
      width: 100%;
      height: 100%;

      .login-form {
        padding: 24px;

        .login-form-input {
          width: 100%;
          margin-bottom: 25px;

          .el-form-item__content {
            line-height: 38px;

            .el-input__inner {
              font-size: 16px;
              padding-left: 15px;
              width: 100%;
              height: 38px;
              line-height: 38px;
            }
          }
        }

        .login-form-button {
          width: 100%;
          color: #fff;
          font-size: 14px;
          background-color: #409eff;
          border: none;
          padding: 0;
          margin-top: 30px;
          height: 38px;
          line-height: 38px;
        }
      }
    }
  }
}
</style>