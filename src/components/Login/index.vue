<template>
  <div class="login_body">
    <div>
      <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input class="login_text" type="password" placeholder="请输入您的密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">立即注册</a>
      <a href="#" is-link @click="showPopup">关于瓜子</a>
    </div>

    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '20%'}"
    >
      <div class="aboutContent">
          <img src="@/assets/logo.png" class="logoImg">
          瓜子电影，让电影走进生活~
          </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #8dd365;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #8dd365;
}
.aboutContent{
    width: 100%;
    position:absolute;
    top:30%;
    text-align: center;
}
.logoImg{
    margin: 0 auto;
    width: 50px;
    height: 50px;
}
</style>
