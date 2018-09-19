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
        Vue.set(goodsData, 'checkout', true)
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
        if (goods.count <= 1) return
        goods.count--
      }
    })
  },
  changeCheckout (state, data) {
    state.shopCarPanelData.forEach((goods) => {
      if (goods.sku_id === data) {
        goods.checkout = !goods.checkout
      }
    })
  },
  selectAllCheckout (state, changeCheckoutStatus) {
    state.shopCarPanelData.forEach((goods) => {
      goods.checkout = !changeCheckoutStatus
    })
  },
  deleteSelectGoods (state) {
    let i = state.shopCarPanelData.length
    while (i--) {
      if (state.shopCarPanelData[i].checkout) {
        state.shopCarPanelData.splice(i, 1)
      }
    }
  },
  chooseDefault (state, data) {
    state.receiveInfo.forEach((item, index) => {
      item.default = false
      if (index === data) {
        item.default = true
      }
    })
  }
}
