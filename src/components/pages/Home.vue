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
    <div class="banner" v-bind:class="{bannerList:bannerList}">
      <swiperDefault v-if="bannerPicArray.length>0" :bannerPicArray="bannerPicArray"></swiperDefault>
    </div>
    <div class="grid">
      <div v-for="(cate,index) in category" :key="index" class="gridItem">
        <img v-lazy="cate.image" class="icon" /><br />
        <span>{{cate.mallCategoryName}}</span> 
      </div>
    </div>
    <div class="advertesPicture">
      <img v-if="advertesPicture!=''" :src="advertesPicture" class="iconAdvertesPicture">
    </div>
    <!--Recommend goods area-->
    <div class="recommendArea">
      <div class="recommendTitle">商品推荐</div>
      <div class="recommendBody">
        <recommend v-if="recommendGoods.length>0" :recommendGoods="recommendGoods"></recommend>
      </div>
    </div>
    <!--floor one:area-->
    <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
    <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
    <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
    <!--Hot Area-->
    <div class="hotArea">
      <div class="hotTitle">热卖商品</div>
      <div class="hotGoods">
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="( item,index ) in hotGoods" :key="index">
              <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import swiperDefault from "../swiper/swiperDefault";
import recommend from "../swiper/recommend";
import floorComponent from "../component/floorComponent";
import goodsInfo from "../component/goodsInfoComponent";
import url from "@/serviceAPI.config.js";
export default {
  name: "Home",
  data() {
    return {
      iconMsg: require("../../assets/images/iconMsg.png"),
      bannerList: true, //轮播图的loading
      bannerPicArray: [], //轮播图集合
      advertesPicture: "", //配送gif图
      category: [], //菜单
      recommendGoods: [], //推荐商品
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      hotGoods: [] //热卖商品
    };
  },
  components: { swiperDefault, recommend, floorComponent, goodsInfo },
  created() {
    axios({
      url:
        url.getHomeInfo,
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.bannerPicArray = response.data.data.slides;
          this.advertesPicture =
            response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.category = response.data.data.category;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;
          this.floorName = response.data.data.floorName;
          this.hotGoods = response.data.data.hotGoods;
          this.bannerList = false;
        }
      })
      .catch(error => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../../assets/css/base';

.header {
  height: 1rem;
  line-height: 1rem;
  overflow: hidden;
  background-color: #ff0000;
}

.iconMsg {
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  vertical-align: top;
  margin: 0.25rem auto;
}

.searchInput {
  width: 100%;
  height: 0.65rem;
  font-size: 0.32rem;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2rem;
  outline: none;
  display: block;
  margin-top: 0.175rem;
  box-sizing: border-box;
  padding: 0 0.3rem;
}

.banner {
  overflow: hidden;
  height: 3.75rem;
  position: relative;
}

.bannerList:after {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.2rem 0 0 -0.2rem;
  content: '';
  background: url('../../assets/images/loading.gif');
  background-size: 100% 100%;
}

.grid {
  width: 100%;
  display: flex;
  padding: 0.2rem 0;

  .gridItem {
    flex: 1;
    font-size: 0.25rem;
    text-align: center;
    line-height: 0.5rem;

    .icon {
      width: 0.7rem;
      height: 0.7rem;
      vertical-align: middle;
      fill: currentColor;
      overflow: hidden;
    }
  }
}

.advertesPicture {
  width: 7.2rem;
  height: 0.64rem;
  margin: 0 auto;

  .iconAdvertesPicture {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.recommendArea {
  background-color: #ffffff;

  .recommendTitle {
    border-bottom: 1px solid #eeeeee;
    font-size: 0.28rem;
    padding: 0.2rem;
    color: #e50101;

    .recommendBody {
      border-bottom: 1px solid #eeeeee;
    }
  }
}

.hotArea {
  overflow: hidden;
  font-size: 14px;
  text-align: center;

  .hotTitle {
    height: 0.8rem;
    line-height: 0.8rem;
    background: #f0f0f0;
  }

  .hotGoods {
    overflow: hidden;
    line-height 0.5rem
  }
}
</style>
