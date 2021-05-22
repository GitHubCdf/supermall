import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    add(state,payload) {
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(state,payload) {
      return new Promise((resolve, reject) => {
        this.commit('add',payload)
        resolve('添加到购物车')
      })
    }
  },
  modules: {
  }
})
