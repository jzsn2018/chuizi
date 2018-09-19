<template>
  <div class="page-cart">
    <cart-title>
      我的优惠
    </cart-title>
    <discost-inner></discost-inner>
  </div>
</template>

<script>
import cartTitle from '@/pages/shoppingList/components/cartTitle'
import discostInner from './discostInner'
export default {
  name: 'discost',
  props: [''],
  components: {
    cartTitle,
    discostInner
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
</style>
