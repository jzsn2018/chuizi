<template>
  <div class="page-cart">
    <cart-title>收货信息</cart-title>
    <box-inner></box-inner>
  </div>
</template>

<script>
import cartTitle from '@/pages/shoppingList/components/cartTitle'
import boxInner from './boxInner'
export default {
  name: 'ReceiptInformation',
  props: [''],
  components: {
    cartTitle,
    boxInner
  },
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.page-cart
  clear both
  width 1220px
  min-height 600px
  padding 0 0 25px
  margin 0 auto
  padding-top 30px
</style>
