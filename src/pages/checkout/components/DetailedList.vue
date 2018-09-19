<template>
  <div class="page-cart">
    <cart-title>购物清单</cart-title>
    <detail-list-inner></detail-list-inner>
  </div>
</template>

<script>
import cartTitle from '@/pages/shoppingList/components/cartTitle'
import detailListInner from './detailListInner'
export default {
  name: 'ReceiptInformation',
  props: [''],
  components: {
    cartTitle,
    detailListInner
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
  padding 0 0 25px
  margin 0 auto
  max-height 600px
  overflow-x hidden
  overflow-y auto
</style>
