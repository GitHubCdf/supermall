<template>
  <div v-if="Object.keys(venderInfo).length != 0" class="detail-vender">
    <div class="vender-logo">
      <img :src="venderInfo.shopLogo" alt="" />
      <span>{{ venderInfo.name }}</span>
    </div>
    <div class="vender-info">
      <div class="vender-desc">
        <span>
          <p>{{ sells(venderInfo.cSells) }}</p>
          <p>总销量</p>
        </span>
        <span>
          <p>{{ venderInfo.cGoods }}</p>
          <p>全部宝贝</p>
        </span>
      </div>
      <div class="vender-score">
        <div v-for="(item, index) in venderInfo.score" :key="index">
          <span>{{ item.name }}</span>
          <span :class="{ better: item.isBetter }">{{ item.score }}</span>
          <span :class="{ better: item.isBetter }">
            <span v-if="item.isBetter">高</span>
            <span v-else>低</span>
          </span>
        </div>
      </div>
    </div>
    <div class="shop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    venderInfo: {
      type: Object,
      default: {},
    },
  },

  computed: {
    sells() {
      return (sell) => {
        if (sell >= 10000) {
          return parseFloat(sell / 10000).toFixed(1) + "万";
        } else {
          return sell;
        }
      };
    },
  },
};
</script>

<style scoped>
.vender-logo {
  padding: 10px 0 20px 10px;
}
.vender-logo img {
  height: 55px;
  width: 55px;
  border: 1px solid #999;
  border-radius: 50%;
}
.vender-logo span {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-left: 15px;
}

.vender-info {
  display: flex;
  color: #333;
  padding: 0 0  20px 0;
}
.vender-info div {
  flex: 1;
}
.vender-desc {
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.vender-desc p:nth-child(1) {
  font-size: 20px;
  padding: 0 0 10px 0;
}
.vender-desc span {
  padding: 5px 10px;
}
.vender-desc span:nth-child(2) {
  padding-right: 40px;
  border-right: 1px solid #ccc;
}
.vender-score {
  padding: 0 0 0 10px;
}
.vender-score div {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
}
.vender-score span:nth-child(2) {
  width: 30px;
  text-align: right;
  color: #3bab0a;
  background-color: #fff!important;

}
.vender-score span:nth-child(3) {
  background-color: #3bab0a;
  text-align: center;
  line-height: 16px;
  font-size: 12px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: #eee!important;
}
 .better {
  background-color: #c90b0a!important;
  color: #c90b0a!important;
}
.shop {
  margin: 0 auto 20px;
  width: 80px;
  padding: 5px 0;
  text-align: center;
  color: #fff;
  background-color: var(--color-tint);
  border-radius: 15px;
}
</style>