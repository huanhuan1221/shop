<template>
    <div class="goodInfo">
        <div class="goodsImage">
            <img v-lazy="goodsImage" width="90%" />
        </div>
        <div class="goodsName">{{goodsName}}</div>
        <div class="goodsPrice">￥{{goodsPrice | moneyFilter}}</div>
    </div>
</template>

<script>
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  props: ["goodsImage", "goodsName", "goodsPrice"],
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  }
};
</script>
<style lang="stylus" scoped>
.goodsName {
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

