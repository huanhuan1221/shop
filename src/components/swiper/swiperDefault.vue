<template>
  <div>
      <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="(item,index) in bannerPicArray" :key="index">
              <img :src="item.image" class="trunImg" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        loop:true,
        //direction:'vertical',//横或竖直切换
        //slidesPerView: "auto",
        mousewheel: true,
        autoplay:true,
        speed:500,
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        }
      }
    };
  },
  components: { swiper, swiperSlide },
  props:['bannerPicArray']
};
</script>
<style lang="stylus" scoped>
.swiper {
    height: 3.75rem;

    .swiper-slide {
        height: 3.75rem;
        text-align: center;
        .trunImg {
            width 100%
            height 100%
            display block
        }
    }
}
</style>
