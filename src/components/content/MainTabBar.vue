<template>
  <div id="main-tab-bar">
    <keep-alive include="Home"><router-view ></router-view></keep-alive>
    <!-- 排除不显示的tabbar的页面 -->
    <tab-bar v-show="$route.name !== 'Detail'"> 
      <tab-bar-item :path="'/home'">
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/images/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item :path="'/category'">
        <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/images/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item :path="'/shopcart'">
        <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/images/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item :path="'/profile'">
        <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/images/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem
  },
  computed: {
    key() {
      return this.$route.name != undefined ? this.$route.name + this.$route.path  : this.$route + new Date()
    }
  }
};
</script>

<style>
</style>