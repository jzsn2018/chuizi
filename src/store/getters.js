export default {
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
  },
  checkoutNum (state) {
    let total = 0
    state.shopCarPanelData.forEach((goods) => {
      if (goods.checkout) {
        total += goods.count
      }
    })
    return total
  },
  checkoutPrice (state) {
    let price = 0
    state.shopCarPanelData.forEach((goods) => {
      if (goods.checkout) {
        price += goods.count * goods.price
      }
    })
    return price
  },
  changeCheckoutStatus (state) {
    let changeCheckoutStatus = true
    state.shopCarPanelData.forEach((goods) => {
      if (!goods.checkout) {
        changeCheckoutStatus = false
      }
    })
    return changeCheckoutStatus
  }
}
