<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
    <div class="desc">
      <p>{{detailInfo.desc}}</p>
      <hr>
      <p>{{detailInfo.detailImage[0].desc}}</p>
      <p>{{detailInfo.detailImage[0].key}}</p>
    </div>
    <div>
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" :key="index" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() { 
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .detail-info img  {
    width: 100%;
    height: 100%;
  }
  .desc {
    margin: 5px 5px;
    padding: 5px 10px;
    /* font-weight: 700; */
    font-size: 12px;
    color: #999;
    border-left: 8px solid var(--color-tint);
  }
  .desc p:nth-child(1) {
    padding-bottom: 5px;
  }
  .desc p:nth-child(n + 2) {
    font-size: 16px;
    color: #333;
    padding-bottom: 10px;
    color: var(--color-tint);
  }
  
</style>