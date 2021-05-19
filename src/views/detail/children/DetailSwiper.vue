<template>
  <div class="banner">
    <swiper :index="index" :len="banner.length" @pageevent="getPage">
      <swiper-item
        v-for="(item, index) in banner"
        :key="item"
        :index="index"
        @itemclick="getIndex"
      >
        <img :src="item" alt="" :title="item" />
      </swiper-item>
      <swiper-item
        v-if="banner.length != 0"
        :index="banner.length"
        @itemclick="getIndex"
      >
        <img :src="banner[0]" alt="" :title="banner[0]" />
      </swiper-item>
    </swiper>
    <ul>
      <li
        v-for="(item, i) in banner"
        :key="item"
        :class="{ active: i == page }"
      ></li>
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
      page: 0,
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
      this.page = page;
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  height: 300px;
  overflow: hidden;
}
.banner ul {
  list-style: none;
  position: absolute;
  top: 90%;
  left: 50%;
  height: 12px;
  border-radius: 5px;
  transform: translate(-50%, 0);
  /* background-color: rgba(0, 0, 0, 0.2); */
  z-index: 9;
}

.banner ul li {
  float: left;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 2px 5px;
  background: rgba(255, 255, 255, 0.8);
}
.banner ul .active {
  background: var(--color-high-text);
}
</style>