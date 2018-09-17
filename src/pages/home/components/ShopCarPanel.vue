<template>
<div class="carpanel-wrap" :style='styleDisplay' >
  <div class="carpanel-wrap-content">
    <car-panel v-if="!carPanelData.length"></car-panel>
    <car-shop v-else></car-shop>
  </div>
</div>
</template>
<script>
import carPanel from './carShop/carPanel'
import carShop from './carShop/shop'
export default {
  name: 'ShopCarPanel',
  props: ['styleDisplay'],
  components: {
    carPanel,
    carShop
  },
  data () {
    return {

    }
  },
  computed: {
    carPanelData () {
      return this.$store.state.shopCarPanelData
    },
    ball () {
      return this.$store.state.ball
    }
  }
}
</script>
<style lang='stylus' scoped>
.carpanel-wrap-content
  position absolute
  z-index 2
  top 45px
  right 30px
  width 360px
  min-height 200px
  display block
  cursor pointer
</style>
