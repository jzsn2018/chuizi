<template>
  <div class="page-cart">
    <cart-title>发票信息</cart-title>
    <invoice-inner></invoice-inner>
  </div>
</template>

<script>
import cartTitle from '@/pages/shoppingList/components/cartTitle'
import invoiceInner from './invoiceInner'
export default {
  name: 'ReceiptInformation',
  props: [''],
  components: {
    cartTitle,
    invoiceInner
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
  padding-top 30px
</style>
