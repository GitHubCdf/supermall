<template>
  <div v-if="goods != null" class="detail-base-info">
    <h4>{{ goods.title }}</h4>
    <div class="price">
      <span class="real-price">￥{{ goods.realPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="columns">
      <span v-for="index in goods.columns.length - 1" :key="index">{{
        goods.columns[index - 1]
      }}</span>
      <span
        ><img :src="goods.services[goods.services.length-1].icon" alt="" />{{
          goods.services[goods.services.length-1].name
        }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: Object,
  },
};
</script>

<style scoped>
h4 {
  height: 90px;
  padding: 20px 10px 10px;
  font-size: 16px;
  text-indent: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /* -webkit-box-orient: vertical; */
}
.price {
  position: relative;
}
.real-price {
  color: var(--color-high-text);
  padding: 0 0 0 10px;
  font-size: 20px;
}
.old-price {
  color: #999;
  text-decoration: line-through;
  font-size: 14px;
  padding: 0 2px;
}
.discount {
  vertical-align: top;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  line-height: 14px;
}
.columns {
  padding: 20px 10px 10px;
  color: #999;
  display: flex;
  font-size: 14px;
  text-align: center;
}
.columns span {
  flex: 1;
  border-bottom: 1px solid #eee;
  padding: 0 0 10px 0;

  
}
img {
  width: 14px;
  height: 14px;
  vertical-align: bottom;
}
</style>