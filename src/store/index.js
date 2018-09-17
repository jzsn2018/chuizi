import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopCarPanelData: [],
    visibilty: false,
    prompt: false,
    maxNumberTitle: '',
    maxNumberVersion: '',
    ball: {
      show: false,
      el: null,
      img: ''
    }
  },
  mutations: {
    changeshow (state, data) {
      state.visibilty = !state.visibilty
    },
    changeshowtrue (state) {
      state.visibilty = true
    },
    addCarPanelData (state, data) {
      let boff = true
      if (!state.ball.show) {
        state.shopCarPanelData.forEach((goods) => {
          if (goods.sku_id === data.sku_id) {
            goods.count++
            boff = false
            if (goods.count > goods.limit_num) {
              goods.count--
              state.maxNumberTitle = goods.title
              state.maxNumberVersion = goods.spec_json.show_name
              state.prompt = true
              return
            }
            state.ball.show = true
            state.ball.img = data.ali_image
            state.ball.el = event.path[0]
          }
        })
        if (boff) {
          let goodsData = data
          Vue.set(goodsData, 'count', 1)
          state.shopCarPanelData.push(goodsData)
          state.ball.show = true
          state.ball.img = data.ali_image
          state.ball.el = event.path[0]
        }
      }
    },
    deleteShop (state, data) {
      state.shopCarPanelData.forEach((good, index) => {
        if (good.sku_id === data) {
          state.shopCarPanelData.splice(index, 1)
          return {}
        }
      })
    },
    closePrompt (state) {
      state.prompt = false
    },
    ballshow (state, data) {
      state.ball.show = data
    }
  },
  getters: {
    totalCount (state) {
      let total = 0
      state.shopCarPanelData.forEach((item) => {
        total += Number(item.count)
      })
      return total
    },
    totalPrice (state) {
      let price = 0
      state.shopCarPanelData.forEach((item) => {
        price += Number(item.price) * Number(item.count)
      })
      return price
    }
  }
})
