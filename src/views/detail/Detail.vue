<template>
  <div id="detail">
    <detail-nav @tabClick="jump" :alive="isAlive"></detail-nav>
    <scroll class="content" ref="scroll" @scroll="tabChange">
      <detail-swiper :banner="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-vender class="vender" :venderInfo="venderInfo"></detail-vender>
      <detail-info ref="detail" :detailInfo="detailInfo"></detail-info>
      <detail-item-info
        ref="params"
        :itemParams="itemParams"
      ></detail-item-info>
      <detail-rate ref="rate" :itemRate="itemRate"></detail-rate>
      <goods-list ref="recom" :goods="detailRecommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNav from "./children/DetailNav";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailVender from "./children/DetailVender";
import Scroll from "components/common/scroll/Scroll";
import DetailInfo from "./children/DetailInfo";
import DetailItemInfo from "./children/DetailItemInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailRate from './children/DetailRate'

// 导入方法
import { getDetailData, getRecommendData, Goods } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailVender,
    Scroll,
    DetailInfo,
    DetailItemInfo,
    GoodsList,
    DetailRate
  },
  data() {
    return {
      iid: String,
      topImages: [],
      goods: null,
      venderInfo: {},
      detailInfo: {},
      itemParams: {},
      detailRecommend: [],
      itemRate: {},
      isAlive: 0,
    };
  },
  methods: {
    jump(index) {
      let height = 0;
      switch (index) {
        case 0:
          // console.log(this.$refs.detail.$el.offsetTop);
          height = this.$refs.detail.$el.offsetTop;
          break;
        case 1:
          // console.log(this.$refs.params.$el.offsetTop);
          height = this.$refs.params.$el.offsetTop;

          break;
        case 2:
          // console.log(this.$refs.rate.$el.offsetTop);
          height = this.$refs.rate.$el.offsetTop;

          break;
        case 3:
          // console.log(this.$refs.recom.$el.offsetTop);
          height = this.$refs.recom.$el.offsetTop;

          break;
      }
      this.$refs.scroll.scrollTo(0,-height,0)
    },
    tabChange(pos) {
      if(pos.y <= -this.$refs.recom.$el.offsetTop) {
        this.isAlive = 3;
      } else if (pos.y <= -this.$refs.rate.$el.offsetTop) {
        this.isAlive = 2;
      } else if (pos.y <= -this.$refs.params.$el.offsetTop) {
        this.isAlive = 1;       
      } else {
        this.isAlive = 0;
      }
    }
  },

  created() {
    console.log(this.$route);
    //1.获取iid
    this.iid = this.$route.params.iid;
    // 2.请求数据
    getDetailData(this.iid).then((response) => {
      const data = response.result;
      this.topImages = data.itemInfo.topImages;
      this.venderInfo = data.shopInfo;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.detailInfo = data.detailInfo;
      this.itemParams = data.itemParams;
      this.itemRate = data.rate
    });
    getRecommendData().then((response) => {
      this.detailRecommend = response.data.list;
    });
  },
  
};
</script>

<style scoped>
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
}
.vender {
  border-bottom: 8px solid #eee;
}
</style>