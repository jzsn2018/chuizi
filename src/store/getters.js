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
  },
  getCheckoutGoods (state) {
    let list = []
    state.shopCarPanelData.forEach((goods) => {
      if (goods.checkout) {
        list.push(goods)
      }
    })
    return list
  },
  getCheckoutGoodsNumber (state) {
    let Number = 0
    state.shopCarPanelData.forEach((goods) => {
      if (goods.checkout) {
        Number += goods.count
      }
    })
    return Number
  },
  getCheckoutGoodsTotal (state) {
    let Price = 0
    state.shopCarPanelData.forEach((goods) => {
      if (goods.checkout) {
        Price += goods.count * goods.price
      }
    })
    return Price
  },
  getCheckoutGoodsFreight (state, getters) {
    let Freight = 0
    let Price = getters.getCheckoutGoodsTotal
    if (Price >= 400) {
      Freight = 0.00
    } else if (Price > 0 && Price <= 99) {
      Freight = 15
    } else if (Price >= 99 && Price <= 199) {
      Freight = 10.00
    } else if (Price >= 200 && Price <= 399) {
      Freight = 6.00
    } else if (Number(Price) === 0) {
      Freight = 0
    }
    return Freight
  }
}
