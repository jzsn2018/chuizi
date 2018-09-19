<template>
  <div class="checkout-box">
    <receipt-information></receipt-information>
    <detailed-list></detailed-list>
    <invoice></invoice>
    <discost></discost>
    <checkout-bar></checkout-bar>
  </div>
</template>

<script>
import ReceiptInformation from '@/pages/checkout/components/ReceiptInformation'
import DetailedList from '@/pages/checkout/components/DetailedList'
import invoice from '@/pages/checkout/components/invoice'
import discost from '@/pages/checkout/components/discost'
import checkoutBar from '@/pages/checkout/components/checkoutBar'
export default {
  name: 'checkout',
  props: [''],
  data () {
    return {

    }
  },
  components: {
    ReceiptInformation,
    DetailedList,
    invoice,
    discost,
    checkoutBar
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.checkout-box
  background #ededed
</style>
