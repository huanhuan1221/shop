<template>
    <div>
        <van-nav-bar 
            title="用户登录" 
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
                <van-button type="primary" size="large" @click="LoginAction" :loading="openLoading">登录</van-button>
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
  created() {
    if (localStorage.userInfo) {
      Toast.success("您已经登录");
      this.$router.push("/Home");
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    LoginAction() {
      this.checkFrom() && this.axiosLoginUser();
    },
    axiosLoginUser() {
      this.openLoading = true;
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200 && response.data.message) {
            new Promise((resolve, reject) => {
              localStorage.userInfo = { username: this.username };
              setTimeout(() => {
                resolve();
              }, 500);
            })
              .then(() => {
                Toast.success("登录成功");
                this.$router.push("/Home");
              })
              .catch(error => {
                Toast.success("登录状态保存失败");
                console.log(error);
              });
          } else {
            Toast.fail("登录失败");
            this.openLoading = false;
          }
        })
        .catch(error => {
          console.log(error);
          Toast.fail("登录失败");
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
