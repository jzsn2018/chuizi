<template>
  <div class="cart-title">
    购物清单
  </div>
</template>

<script>

export default {
  name: 'cartTitle',
  props: [''],
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.cart-title
  padding-left 30px
  position relative
  height 60px
  padding 0 10px 0 24px
  border-bottom 1px solid #d4d4d4
  border-radius 8px 8px 0 0
  background linear-gradient(#fbfbfb,#ececec)
  line-height 60px
  font-size 18px
  color #333
  font-weight 400
</style>
