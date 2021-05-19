<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive: {
      get() {
        return this.$route.path == this.path
      },
      set() {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => {})
      this.isActive = true
    }
  },
  props: {
    path: String
  },
  beforeRouteLeave: (to,from,next) => {
    console.log(from)
    // next()
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
}

.active {
  color: #d4237a;
}
</style>