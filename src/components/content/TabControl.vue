<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="item" :class="{controlactive: currentIndex==index}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return ['左边','中间', '右侧']
      }
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }

}
</script>

<style>
  .tab-control {
    background: #fff;
    display: flex;
    text-align: center;
    padding: 10px 0;
    z-index: 9;
  }

  .tab-control-item {
    flex: 1;
  }

  .controlactive {
    color: var(--color-high-text);
  }

  .controlactive span {
    padding: 0 5px 5px;
    border-bottom: 3px solid var(--color-high-text);
  }
</style>