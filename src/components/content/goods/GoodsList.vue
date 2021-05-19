<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.acm" :goodsitem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* align-items:stretch; */
    padding: 0 5px;
  } 
</style>