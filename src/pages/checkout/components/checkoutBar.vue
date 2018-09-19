<template>
<div class="fix-checkout-bar">
  <div class="fix-bar-wrapper">
    <div class="detail-box item-box">
      <div class="count item-box">
        <div class="head">商品件数</div>
        <div class="number">{{getCheckoutGoodsNumber}}</div>
      </div>
      <div class="total-price item-box">
        <div class="head">商品总价</div>
        <div class="money">¥ {{getCheckoutGoodsTotal}}</div>
      </div>
      <div class="discount item-box">
        <div class="head">活动优惠</div>
        <div class="money">- ¥ 0.00</div>
      </div>
      <div class="coupon-discount item-box">
        <div class="head">优惠券抵扣</div>
        <div class="money">- ¥ 0.00</div>
      </div>
      <div class="freight item-box">
        <div class="head">运费</div>
        <div class="money">¥ {{getCheckoutGoodsFreight}}</div>
      </div>
  </div>
  <div class="checkout-box">
    <div class="prices">应付总额：
      <span class="symbol">￥</span>
      <span>{{getCheckoutGoodsTotal + getCheckoutGoodsFreight}}</span>
    </div>
    <div class="payment-blue-btn">
      <a>提交订单</a>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'checkoutBar',
  props: [''],
  data () {
    return {

    }
  },
  computed: {
    getCheckoutGoodsNumber () {
      return this.$store.getters.getCheckoutGoodsNumber
    },
    getCheckoutGoodsTotal () {
      return this.$store.getters.getCheckoutGoodsTotal
    },
    getCheckoutGoodsFreight () {
      return this.$store.getters.getCheckoutGoodsFreight
    },
    getCheckoutGoods () {
      return this.$store.getters.getCheckoutGoods.length
    }
  },
  methods: {
    scrollHandle () {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      let fixCheckoutBar = document.querySelector('.fix-checkout-bar')
      console.log(fixCheckoutBar)
      scrollTop >= 700 ? fixCheckoutBar.style.position = 'relative' : fixCheckoutBar.style.position = 'fixed'
      console.log(scrollTop)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandle(), true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandle(), true)
  }
}
</script>
<style lang='stylus' scoped>
.fix-checkout-bar
  width 100%
  height 60px
  position fixed
  bottom 0
  left 0
  right 0
  background #fafafa
  border-top 1px solid #e3e3e3
  box-shadow 0 -1px 3px rgba(0,0,0,.04)
  z-index 25
  .fix-bar-wrapper
    width 1220px
    margin-left auto
    margin-right auto
    height 100%
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .detail-box
      display flex
      flex-direction row
      .item-box
        padding 0 30px
        border-left 1px solid #dcdcdc
      .item-box:first-child
        border-left none
        padding-left 0
      .head
        font-size 12px
        color #7d7d7d
        margin-bottom 10px
      .money
        font-size 14px
        font-weight 600
        color #d44d44
      .number
        font-size 14px
        font-weight 600
        color #333
    .checkout-box
      display flex
      flex-direction row
      align-items center
      .prices
        margin-right 30px
        font-weight 400
        color #666
        .symbol
          font-size 14px
        & span
          font-weight 600
          font-size 20px
          color #d44d44
      .payment-blue-btn
        width 118px
        height 38px
        line-height 38px
        text-align center
        cursor pointer
        margin-left 10px
        border-radius 6px
        background-color #6383c6
        background-image linear-gradient(#6383c6,#4262af)
        margin-top -2px
        padding 1px
        color #fff

</style>
