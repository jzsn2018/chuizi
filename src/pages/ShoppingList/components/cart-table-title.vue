<template>
  <div class="cart-table-title">
    <span class="name">商品信息</span>
    <span class="operation">操作</span>
    <span class="subtotal">小计</span>
    <span class="num">数量</span>
    <span class="price">价格</span>
  </div>
</template>

<script>

export default {
  name: 'cartTableTitle',
  props: [''],
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.cart-table-title
  position relative
  z-index 1
  line-height 38px
  font-size 12px
  background #eee
  padding 0 0 0 30px
  border-bottom 1px solid #dbdbdb
  border-bottom-color rgba(0,0,0,.08)
  &::after
    content ''
    visibility hidden
    height 0
    display block
    clear both
  & span
    color #838383
  .name
    float left
    text-align left
  .operation,.subtotal,.num,.price
    width 137px
    float right
    text-align center
    color #838383
</style>
