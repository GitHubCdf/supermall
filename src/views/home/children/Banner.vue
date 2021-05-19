<template>
  <div class="banner clear-fix">
    <swiper :index="index" :len="banner.length" @pageevent="getPage">
      <swiper-item
        v-for="(item, index) in banner"
        :key="item.title"
        :index="index"
        @itemclick="getIndex"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" :title="item.title" />
        </a>
      </swiper-item>
      <swiper-item
        v-if="banner.length != 0"
        :index="banner.length"
        @itemclick="getIndex"
      >
        <a :href="banner[0].link">
          <img :src="banner[0].image" alt="" :title="banner[0].title" />
        </a>
      </swiper-item>
    </swiper>
    <ul>
      <li v-for="(item, i) in banner" :key="item.title" :class="{active: i == page}"></li>
    </ul>
  </div>
</template>

<script>
import SwiperItem from "components/common/swiper/SwiperItem";
import Swiper from "components/common/swiper/Swiper";

export default {
  data() {
    return {
      index: 0,
      page: 0
    };
  },
  props: {
    banner: Array,
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    getIndex(index) {
      this.index = index;
    },
    getPage(page) {
      this.page = page
    }
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  /* height: 200px; */
  margin-top: 44px;
}
.banner ul {
  list-style: none;
  position: absolute;
  top: 85%;
  left: 50%;
  height: 12px;
  border-radius: 5px;
  transform: translate(-50%, 0);
  background-color: rgba(0,0,0, .2);
  z-index: 9;
}

.banner ul li {
  float: left;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 2px 5px;
  background: rgba(255,255,255, .3);
}
.banner ul .active {
  background: #fff;
}

</style>