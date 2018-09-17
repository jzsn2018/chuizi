<template>
    <div class="carPanel">
    <div class="title">
      <h3 class="title-h3">您的购物车为空</h3>
      <p class="title-desc">您还没有选购任何商品，现在前往商城选购吧！</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'carPanel',
  props: [''],
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.carPanel
    display block
    position absolute
    z-index 2
    top 0px
    right 0px
    width 100%
    height 134px
    padding-top 180px
    background url(//static.smartisanos.cn/index/assets/images/cart-empty.01f4c99a9df22275a7d374be0195adc7.png) center 90px no-repeat
    background-color #fff
    border 0 solid hsla(0,0%,100%,.01)
    box-shadow 0 0 0 1px rgba(0,0,0,.06),0 20px 40px rgba(0,0,0,.15)
    border-radius 8px
    .title-h3
      font-size 18px
      color #333
      margin-bottom 7px
      font-weight 400
      text-align center
    .title-desc
      font-size 12px
      color #bcbcbc
      text-align center
</style>
