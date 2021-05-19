<template>
  <div class="detail-nav">
    <nav-bar> 
      <div slot="left" class="back" @click="backHome"> 
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center">
        <tab-control class="detail-tab-contorl" :titles="titles"></tab-control>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl";

export default {
  components: {
    NavBar,
    TabControl,
  },
  data() {
    return {
      titles: ['详情', '参数', '评论', '推荐']
    }
  },
  methods: {
    backHome() {
      this.$router.back()
    }
  }
};
</script>

<style scoped> 
  .detail-tab-contorl {
    padding: 0;
    font-size: 14PX;
  }
  
</style>