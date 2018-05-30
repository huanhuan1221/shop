<template>
    <div>
        <div class="floor">
            <div class="floorTitle">{{floorTitle}}</div>
            <div class="floorAnomaly">
                <div class="floorOne">
                    <img :src="floorData0.image" class="floorImg" />
                </div>
                <div>
                    <div class="floorTwo">
                        <img :src="floorData1.image" class="floorImg" />
                    </div>
                    <div class="floorThree">
                        <img :src="floorData2.image" class="floorImg" />
                    </div>
                </div>
            </div>
            <div class="floorRule">
                <div class="floorRuleItem" v-for="(item,index) in floorData.slice(3)" :key="index">
                    <img :src="item.image" width="100%"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["floorData", "floorTitle"],
  data() {
    return {
      floorData0: [],
      floorData1: [],
      floorData2: []
    };
  },
  created() {},
  watch: {
    floorData: function(val) {
      this.floorData0 = this.floorData[0];
      this.floorData1 = this.floorData[1];
      this.floorData2 = this.floorData[2];
    }
  }
};
</script>
<style lang="stylus" scoped>
.floor {
    overflow: hidden;

    .floorTitle {
        text-align: center;
        font-size: 14px;
        height: 0.8rem;
        line-height: 0.8rem;
        background-color: #f0f0f0;
    }

    .floorAnomaly {
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
        border-bottom: 1px solid #dddddd;
    }

    .floorAnomaly div {
        width: 3.75rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    .floorOne {
        border-right: 1px solid #dddddd;

        .floorImg {
            width: 100%;
            display: block;
        }
    }

    .floorAnomaly div {
        .floorTwo {
            border-bottom: 1px solid #dddddd;

            .floorImg {
                width: 100%;
                display: block;
            }
        }

        .floorThree {
            .floorImg {
                width: 100%;
                display: block;
            }
        }
    }

    .floorRule {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #fff;

        .floorRuleItem {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 3.75rem;
            border-bottom: 1px solid #ddd;
        }

        .floorRuleItem:nth-child(odd) {
            border-right: 1px solid #ddd;
        }
    }
}
</style>

