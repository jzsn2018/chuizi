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
  }
}
