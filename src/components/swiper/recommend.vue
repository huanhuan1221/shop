<template>
  <div>
       <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="(item,index) in recommendGoods" :key="index">
              <div class="recommendItem">
                <img :src="item.image" class="recommendItemImg">
                <div class="recommendItemTitle">{{item.goodsName}}</div>
                <div class="mallPrice">￥{{item.mallPrice | moneyFilter}} <span class="price">(￥{{item.price | moneyFilter}})</span></div>
                
            </div>
          </swiper-slide>
      </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  data() {
    return {
      swiperOption: {
        //direction:'vertical',//横或竖直切换
        slidesPerView: 3
      }
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  components: { swiper, swiperSlide },
  props: ["recommendGoods"]
};
</script>
<style lang="stylus" scoped>
.recommendItem {
  border-right: 1px solid #eeeeee;
  font-size: 0.25rem;
  text-align: center;
  padding: 0.1rem 0.2rem;

  .recommendItemImg {
    width: 100%;
  }
  .recommendItemTitle{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    color: #dddddd;
    text-decoration: line-through;
  }
}
</style>
