<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <detail-swiper :banner="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNav from './children/DetailNav'
import DetailSwiper from './children/DetailSwiper'

// 导入方法
import {getDetailData} from "network/detail"

export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailSwiper
  },
  data() {
    return {
      iid: String,
      topImages: []
    }
  },
  created() {
    //1.获取iid
    this.iid = this.$route.params.iid
    // 2.请求数据
    getDetailData(this.iid).then( (response)=> {
      console.log(response);
      this.topImages = response.result.itemInfo.topImages
    })
  }
}
</script>

<style>

</style>