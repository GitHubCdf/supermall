<template>
  <div class="detail-bar">
    <div class="vender">
      <div >
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div >
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="shopcar">
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .detail-bar {
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    height: 49px;
    z-index: 999;
  }
  .vender {
    flex: 50%;
  }
  .shopcar {
    flex: 25%;
    line-height: 49px;
    text-align: center;
    vertical-align: center;
    font-weight: 700;
    color: #333;
    background-color: #ff0;
  }
  .buy {
    flex: 25%;
    line-height: 49px;
    vertical-align: center;
    text-align: center;
    font-weight: 700;
    color: #fff;
    background-color: var(--color-tint);
  }
  .vender {
    display: flex;
  }
  .vender div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .icon {
    display: block;
    width: 24px;
    height: 24px;
    background: url('~assets/images/detail/detail_bottom.png') no-repeat 0 0;
    background-size: 24px auto;
    margin: 5px auto 2px;
  }
  .vender div:nth-child(1) i {
    background-position: 0 -58px;

  }
  .vender div:nth-child(2) i {
    background-position: 0 -108px;
  }
</style>