<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
      pullfinished: true, //上拉是否完成
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    pullUpFinished() {
      this.scroll && (this.pullfinished = true);

    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    //1.
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad

    });
    // 2.监听滚动事件
    this.scroll.on("scroll", (posiiton) => {
      this.$emit('scroll', posiiton)
      
    });
    // 3。监听上拉加载
    this.scroll.on('touchEnd', (position) => {
      const wh = this.$refs.wrapper.offsetHeight; //wrapper 的高度
      const ch = this.$refs.content.offsetHeight; //content 的高度
      const offset = 40; //需要多出的高度
      if(position.y < -ch + wh - 44 - offset && this.pullfinished) {
        this.pullfinished = false;
        this.$emit('pullUpLoad')
      }
      
        
    })
  },
};
</script>

<style scoped>

</style>