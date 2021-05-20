<template>
  <div v-if="Object.keys(itemRate).length !== 0" class="detail-rate">
    <div class="rate" v-for="rate in itemRate.list" :key="rate.rateId">
      <a href="javascript;" class="user">
        <img :src="rate.user.avatar" alt="" />
        <span>{{ rate.user.uname }}</span>
      </a>
      <div class="content">
        <p>{{ rate.content }}</p>
        <p :class="{hiddenContent: isHidden}"  @click="showMore">
          {{ rate.explain }}
          
        </p>
        <p class="style">{{ rate.style }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true
    }
  },
  props: {
    itemRate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    showMore() {
      this.isHidden = !this.isHidden
    }
  }
};
</script>

<style scoped>
.detail-rate {
  padding: 20px 0;
}
.user {
  padding: 0 5px;
}
.user img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
.user span {
  font-size: 14px;
  padding: 0 0 0 5px;
}
.content {
  padding: 5px 20px;
  font-size: 14px;
  text-indent: 2em;


}

.style {
  width: 100%;
  text-align: right;
  font-size: 12px;
  color: #999;
}

.content p:nth-child(2) {
  color: #999;
  padding-left: 5px;
  
}
.hiddenContent {
  overflow: hidden;
  overflow-x: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>