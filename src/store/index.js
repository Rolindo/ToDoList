import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputData: "",
    dataList: [],
    finishList: [],
  },
  mutations: {
    addData(state, data) {
      state.inputData = data;
      state.dataList.push(state.inputData)
    },
    addfinishList(state, data) {
      state.finishList.push(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
