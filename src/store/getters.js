export default {
  inStockProducts: (state) => {
    return state.products.filter(p => p.stock > 0)
  },
  displayItems (state) {
    return state.items.slice(0, 20)
  },
  maxPage (state) {
    return Math.ceil(state.items.length / 20)
  }
}