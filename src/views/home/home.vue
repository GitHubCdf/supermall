<template>
  <div id="home">
    <nav-bar class="home-nav"><h3 slot="center">首页</h3></nav-bar>
    <tab-control
        v-show="isShowTabControl"
        class="tab-display"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="scroll"
      @pullUpLoad="loadMore"
    >
      <banner class="home-banner" :banner="banner"></banner>
      <recommend :recommends="recommend"></recommend>
      <future-view></future-view>
      <tab-control
        ref="tab"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//导入组件
import Banner from "./children/Banner";
import NavBar from "components/common/navbar/NavBar";
import Recommend from "views/home/children/Recommend";
import FutureView from "views/home/children/FutureView";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/BackTop";

//导入方法
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      isShowTabControl: true
    };
  },
  components: {
    NavBar,
    Banner,
    Recommend,
    FutureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  methods: {
    /*
     * 组件通行
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    scroll(position) {
      // console.log(this.$refs.tab.$el.offsetTop)
      Math.abs(position.y) > 1000
        ? (this.isShowBackTop = true)
        : (this.isShowBackTop = false);
      Math.abs(position.y + 44) < this.$refs.tab.$el.offsetTop
        ? (this.isShowTabControl = false)
        : (this.isShowTabControl = true);
    },
    /*
     *上拉加载很多
     */
    loadMore() {
      this.getHomeGoods(this.currentType).then(() => {
        this.$refs.scroll.pullUpFinished();
        // this.$refs.scroll.refresh()
      });
    },

    /*
     *网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then((response) => {
        // console.log(response);
        this.banner = response.data.banner.list;
        this.recommend = response.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      return getHomeGoods(type, page).then((response) => {
        // console.log(response.data);
        this.goods[type].list.push(...response.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  created() {
    // 请求banner数据
    this.getHomeMultidata();

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  position: relative;
  width: 100%;
  background-color: var(--color-tint);
  z-index: 99;
}
.home-nav h3 {
  font-weight: 400;
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  /* overflow: hidden; */
}
.tab-display {
  position: fixed;
  top: 44px;
  z-index: 100;
  left: 0;
  right: 0;
}

</style>