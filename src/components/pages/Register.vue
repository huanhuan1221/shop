<template>
    <div>
        <van-nav-bar 
            title="用户注册" 
            left-text="返回" 
            left-arrow
            @click-left="goBack"
        />

        <div class="registerPanel">
            <van-field
                v-model="username" 
                label="用户名" 
                icon="clear" 
                placeholder="请输入用户名" 
                required 
                @click-icon="username=''"
                :error-message="usernameErrorMsg"
            />

            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                :error-message="passwordErrorMsg"
            />
            <div class="registerButton">
                <van-button type="primary" size="large" @click="registerAction" :loading="openLoading">马上注册</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import url from "@/serviceAPI.config.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      openLoading: false, //是否开启用户Loading
      usernameErrorMsg: "", //当用户名出现错误的时候
      passwordErrorMsg: "" //当密码出现错误的时候
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    registerAction() {
      this.checkFrom() && this.axiosRegisterUser();
    },
    axiosRegisterUser() {
      axios({
        url: url.registerUser,
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200) {
            Toast.success("注册成功");
            this.$router.push('/Home');
          } else {
            console.log(response.data.message);
            Toast.fail("注册失败");
            this.openLoading = false;
          }
        })
        .catch(error => {
          console.log(error);
          Toast.fail("注册失败");
          this.openLoading = false;
        });
    },
    checkFrom() {
      let isOk = true;
      this.usernameErrorMsg = "";
      this.passwordErrorMsg = "";
      if (this.username.length < 5) {
        this.usernameErrorMsg = "用户名不能小于5位";
        isOk = false;
        return isOk;
      }
      if (this.password.length < 6) {
        this.passwordErrorMsg = "密码不能少于6位";
        isOk = false;
        return isOk;
      }
      return isOk;
    }
  }
};
</script>
<style lang="stylus"scoped>
.registerPanel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 80px;
}

.registerButton {
  padding-top: 10px;
}
</style>
