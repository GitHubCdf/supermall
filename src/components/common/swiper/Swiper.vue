<template>
  <div class="swiper clear-fix" @touchstart="touchStart" @touchend="touchEnd">
    <slot></slot>
  </div>
</template>

<script>
import animate from "common/animate";

export default {
  data() {
    return {
      timer: null,
      startx: 0,
      starty: 0,
      endx: 0,
      endy: 0,
    };
  },
  props: {
    index: Number,
    len: Number,
  },
  methods: {
    touchStart(e) {
      this.startx = e.touches[0].pageX;
      this.starty = e.touches[0].pageY;
    },
    touchEnd(e) {
      this.endx = e.changedTouches[0].pageX;
      this.endy = e.changedTouches[0].pageY;
      let step = this.endx - this.startx;
      let width = document.body.clientWidth;
      let index = this.index;
      if (Math.abs(step) > 50) {
        if (step > 0) {
          if (index == 0) {
            this.$el.style.marginLeft = this.len * -width + "px";
            index = this.len;
          }
          animate(this, -width * --index, () => {});
        } else {
          if (index == this.len) {
            this.$el.style.marginLeft = 0 + "px";
            index = 0;
          }
          animate(this, -width * ++index, () => {});
        }
        this.$emit("pageevent", index % this.len);
      }
    },
  },
};
</script>

<style>
.swiper {
  /* position: absolute; */
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  /* -webkit-overflow-scrolling: touch; */
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
</style>