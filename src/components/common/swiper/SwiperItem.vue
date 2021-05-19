<template>
   <div class="swiper-item" @touchstart="sendIndex(index)" ref="swiperItem">
     <slot></slot>  
   </div>
</template>

<script>
export default {
  props: {
    index: Number
  },
  methods: {
    sendIndex(index) {
      // console.log(index)
      this.$emit('itemclick', index)
    }
  },
  mounted() {
    this.$refs.swiperItem.style.width = document.body.clientWidth + 'px'
  }
}
</script>

<style>
  .swiper-item {
    flex: 0 0 auto;
  }
  .swiper-item img {
    width: 100%;
    height: 100%;
  }
</style>