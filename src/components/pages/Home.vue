<template>
  <div class="goods">
    <div class="header">
      <van-row>
        <van-col span="3"><img :src="iconMsg" class="iconMsg"></van-col>
        <van-col span="18">
          <input type="text" class="searchInput" placeholder="请输入商品名称">
        </van-col>
        <van-col span="3"><img :src="iconMsg" class="iconMsg"></van-col>
      </van-row>
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
        <img v-lazy="banner.imageUrl" class="trunImg" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import {Lazyload, Swipe, SwipeItem } from "vant";
Vue.use(Lazyload,{
  loading:require('../../assets/images/loading.gif')
}).use(Swipe).use(SwipeItem);
export default {
  name: "Home",
  data() {
    return {
      iconMsg:require('../../assets/images/iconMsg.png'),
      bannerPicArray: [
          {imageUrl:require("../../assets/images/banner1.jpg"),imageLoad:require('../../assets/images/loading.gif')},
          {imageUrl:require("../../assets/images/banner1.jpg")}
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header {
  height 1rem
  line-height 1rem
  overflow hidden
  background-color #ff0000;
}
.iconMsg{
  width .5rem
  height .5rem
  display block
  vertical-align top
  margin .25rem auto
}
.searchInput
  width 100%
  height .65rem
  font-size .32rem
  border none 
  background-color rgba(255, 255, 255, 0.3)
  border-radius 2rem
  outline none
  display block
  margin-top .175rem
  box-sizing border-box
  padding 0 .3rem
.trunImg {
  width: 7.5rem;
  height: 3.75rem;
  display: block;
}
</style>
