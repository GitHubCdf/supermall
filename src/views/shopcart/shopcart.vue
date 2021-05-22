<template>
  <div id="shop-cart">
    <nav-bar>
      <template v-slot:center>
        <span>购物车</span>
      </template>
    </nav-bar>
    <scroll v-if="$store.state.cartList.length > 0" class="content"  ref="scroll" :probeType="3">
      <div
        class="cart-item"
        v-for="item in $store.state.cartList"
        :key="item.iid"
      >
        <img :src="item.image" alt="" @load="imgLoad" />
        <div class="text">
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.desc }}</p>
          <p>
            <span class="price">￥{{ item.price }}</span
            ><span class="count">×{{ item.count }}</span>
          </p>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
export default {
  components: {
    NavBar,
    Scroll,
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
    }
  }
};
</script>

<style scoped>
.shop-cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  display: fixed;
  top: 0;
}
.wrapper {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 49px;
  z-index: -1;
}
.cart-item {
  display: flex;
  height: 123px;
  padding: 10px 5px;
  border-bottom: 1px solid #eee;
}
.cart-item img {
  height: 100%;
  border-radius: 5px;
}
.cart-item div {
  width: 80%;
}
.cart-item p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
  text-indent: 1em;
  padding: 5px 0 10px 0;
}

.cart-item .desc {
  color: #999;
}
.text p:nth-child(3) {
  display: flex;
  justify-content: space-between;
}
.price {
  color: #f00;
  font-size: 18px;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>