<template>
  <div class="checkout-box">
    <home-header></home-header>
    <receipt-information></receipt-information>
    <invoice></invoice>
    <discost></discost>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '@/pages/home/components/header'
import homeFooter from '@/pages/home/components/footer'
import ReceiptInformation from '@/pages/checkout/components/ReceiptInformation'
import invoice from '@/pages/checkout/components/invoice'
import discost from '@/pages/checkout/components/discost'
export default {
  name: 'checkout',
  props: [''],
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeFooter,
    ReceiptInformation,
    invoice,
    discost
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.checkout-box
  background #ededed
</style>
