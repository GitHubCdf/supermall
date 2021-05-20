<template>
  <div class="goods-item" @click="itemClick">
    <img :src="getImage()" alt="" />
    <div>
      <p>{{ goodsitem.title }}</p>
      <span class="price">￥{{ goodsitem.price }}</span>
      <span class="cfav">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iid: '1m7jj7a'  //模拟从详情页 推荐商品跳转 给一个默认iid
    }
  },
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      // this.$router.push("/detail/" + this.goodsitem.iid) 
      this.goodsitem.iid 
      ? this.$router.push("/detail/" + this.goodsitem.iid) 
      : this.$router.push("/detail/" + this.iid);
    },
    getImage() {
      return this.goodsitem.show ? this.goodsitem.show.img :this.goodsitem.image;
    },
  },
};
</script>

<style>
.goods-item {
  width: 48%;
}
.goods-item img {
  width: 100%;
  /* height: 100%; */
  border-radius: 5px;
}

.goods-item p {
  /* line-height: 12px; */
  margin-bottom: 5px;
  font-size: 12px;
  color: #666;
  text-indent: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goods-item div {
  padding: 2px 5px 10px;
  text-align: center;
}

.goods-item .price {
  padding: 5px 10px;
  font-size: 14px;
  color: #f00;
}

.goods-item .cfav {
  font-size: 14px;
  position: relative;
  padding: 0px 5px 0 16px;
}

.goods-item .cfav::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg");
  background-size: 14px;
}
</style>