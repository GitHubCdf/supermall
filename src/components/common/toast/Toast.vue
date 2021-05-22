<template>
  <div v-show="isShow" id="toast">
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      message: ''
    }
  },methods: {
    show(message, delay=1500) {
      this.isShow = true;
      this.message = message
      setTimeout(() => {
        this.isShow= false
        this.message = ''
      }, delay)
    }
  }
}
</script>

<style>
  #toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 5px 10px;
  }
</style>