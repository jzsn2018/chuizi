<template>
<div class="box-inner">
  <div class="empty-label">
    <h3>您的购物车中还没有商品</h3>
    <a class="login-btn" href="">登录</a>
    <a class="link-btn" href="/">现在选购</a>
  </div>
</div>
</template>
<script>
export default {
  name: 'carEmpty',
  props: [''],
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.box-inner
  padding-bottom 91px
  .empty-label
    height 49px
    padding 385px 0 0
    background url(//static.smartisanos.cn/index/assets/images/cart-empty.f25b2c8c8168313d570820fe359998c5.png) no-repeat center 50px
    text-align center
    & h3
      font-size 14px
      line-height 1.5
      color #8d8d8d
      margin-bottom 17px
    .login-btn
      border 1px solid #5c81e3
      color #fff
      background #678ee7
      background-image linear-gradient(180deg,#678ee7,#5078df)
    .link-btn
      border 1px solid #e1e1e1
      color #646464
      background-color #f9f9f9
      background-image linear-gradient(180deg,#fff,#f9f9f9)
    & a
      display inline-block
      border-radius 6px
      width 140px
      line-height 46px
      height 46px
      font-size 14px
      margin 0 5px
      text-align center
      user-select none
      outline none
      text-decoration none
</style>
