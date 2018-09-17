<template>
  <div class="cart-box">
    <div class="page-cart">
      <div class="gray-box gray-bottom-fixed">
        <cart-title>购物清单</cart-title>
        <div>
          <div v-if="item">
            <cart-table-title></cart-table-title>
            <cart-group></cart-group>
            <cart-bottom></cart-bottom>
          </div>
          <car-empty v-else></car-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartTitle from './cartTitle'
import cartTableTitle from './cart-table-title'
import cartGroup from './cart-group'
import cartBottom from './cart-bottom'
import carEmpty from './empty'
export default {
  name: 'cart',
  components: {
    cartTitle,
    cartTableTitle,
    cartGroup,
    cartBottom,
    carEmpty
  },
  props: [''],
  data () {
    return {

    }
  },
  computed: {
    item () {
      return this.$store.state.shopCarPanelData.length
    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.cart-box
  background #ededed
  .page-cart
    clear both
    width 1220px
    min-height 600px
    padding 30px 0 25px
    margin 0 auto
    .gray-box
      position relative
      background #fff
      border-radius 8px
      border 1px solid #dcdcdc
      border-color rgba(0,0,0,.14)
      box-shadow 0 3px 8px -6px rgba(0,0,0,.1)
</style>
