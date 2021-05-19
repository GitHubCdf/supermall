<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" :title="item.title">
      <a href="item.link">
        <img :src="item.image" alt="" />
        <h5>{{ item.title }}</h5>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }

  .recommend div {
    flex: 1;
  }

  .recommend a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .recommend img {
    width: 80%;
  }

  .recommend h5 {
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
  }
   
</style>