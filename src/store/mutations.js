import Vue from 'vue'
export default {
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
  },
  addNum (state, data) {
    state.shopCarPanelData.forEach((goods) => {
      if (goods.sku_id === data) {
        if (goods.count > goods.limit_num) return
        goods.count++
      }
    })
  },
  subNum (state, data) {
    state.shopCarPanelData.forEach((goods) => {
      if (goods.sku_id === data) {
        if (goods.count < 1) return
        goods.count--
      }
    })
  },
  changeCheckout (state, data) {
    state.shopCarPanelData.forEach((goods) => {
      if (goods.sku_id === data) {
        state.checkout = !state.checkout
        Vue.set(goods, 'checkout', state.checkout)
      }
    })
  }
}
