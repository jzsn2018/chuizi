<template>
  <div class="cart-bottom-bg fix-bottom">
    <div class="fix-bottom-inner">
      <div class="cart-bar-operation">
        <div class="choose-all js-choose-all">
          <span class="m-blue-checkbox-new" @click="selectAllCheckout(changeCheckoutStatus)" :class="{'checkbox-on':changeCheckoutStatus}"></span>
          <span class="text-choose-all">全选</span>
        </div>
        <div class="delete-choose-goods" @click='deleteSelectGoods'>
          删除选中的商品
        </div>
      </div>
      <div class="shipping">
          <div class="shipping-box">
            <div class="shipping-total shipping-num">
              <h4 class="highlight">已选择<i>{{checkoutNum}}</i>件商品</h4>
              <h5>共计<i>{{totalCount}}</i>件商品</h5>
            </div>
            <div class="shipping-total shipping-price">
              <h4 class="highlight"> 应付总额：<span>￥</span><span class="money">{{checkoutPrice}}</span></h4>
              <h5 class="shipping-tips">应付总额不含运费</h5>
            </div>
          </div>
          <span class="big-main-btn">
            <router-link  class="btn-a" :class="{'btn-active':checkoutNum}" to='checkout'>现在结算</router-link>
          </span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cartBottom',
  props: [''],
  data () {
    return {}
  },
  computed: {
    totalCount () {
      return this.$store.getters.totalCount
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    },
    checkoutNum () {
      return this.$store.getters.checkoutNum
    },
    checkoutPrice () {
      return this.$store.getters.checkoutPrice
    },
    changeCheckoutStatus () {
      return this.$store.getters.changeCheckoutStatus
    }
  },
  methods: {
    selectAllCheckout (changeCheckoutStatus) {
      this.$store.commit('selectAllCheckout', changeCheckoutStatus)
    },
    deleteSelectGoods () {
      this.$store.commit('deleteSelectGoods')
    }
  }
}
</script>
<style lang='stylus' scoped>
.cart-bottom-bg
  height 80px
  background url(//static.smartisanos.cn/index/assets/images/cart-wrapper-bg.4c8003c76e558b5365c356d7acecd425.jpg) repeat-x
  border-top 1px solid #d9d9d9
  border-radius 0 0 8px 8px
.fix-bottom
  width 1220px
  box-shadow 0 -3px 8px rgba(0,0,0,.04)
  &::before
      content ''
      display block
      visibility hidden
      height 0
      clear both
  .cart-bar-operation
    float left
    padding 35px 26px
    font-size 12px
    .choose-all
      float left
      height 20px
      line-height 20px
      cursor pointer
      position relative
      .m-blue-checkbox-new
        position relative
        display inline-block
        width 25px
        height 25px
        background url(//static.smartisanos.cn/index/assets/images/un-checked.1a97c0ce7ab528e1a70d19d8c41020a2.png) no-repeat
        background-size contain
        cursor pointer
        vertical-align middle
      .checkbox-on
        background url(//static.smartisanos.cn/index/assets/images/checked.bda0219ae10d1fbaedcd22c15b6b881e.png) no-repeat
        background-size contain
      .text-choose-all
        float right
        margin-left 9px
    .delete-choose-goods
      position relative
      margin-left 21px
      color #bbb
    .choose-all, .delete-choose-goods, .selected-count
      float left
      height 20px
      line-height 20px
      cursor pointer
      position relative
    .disabled-link
      cursor not-allowed !important
    .delete-choose-goods:before
      content ''
      position absolute
      left -11px
      top 4px
      height 12px
      width 1px
      background #e1e1e1
      cursor default
  .shipping
    display inline-block
    float right
    padding 20px 30px
    .shipping-box
      display inline-block
      padding-top 1px
      margin-right 10px
      .shipping-total
        display inline-block
        border-left 1px solid #e1e1e1
        padding 0 20px
        .money
          font-weight 700
          font-size 18px
        &:first-child
          border none
        & h4,& h5
          color #323232
          line-height 20px
          & i
            color #d44d44
            font-size 18px
            font-weight 700
            display inline-block
            width 28px
            text-align center
        & h5
          & i
            color #959595
      .shipping-num
        text-align right
      .shipping-price
        padding-right 0
        .shipping-tips
          color #959595
          line-height 25px
          font-weight 400
          font-size 14px
    .big-main-btn
      display block
      padding 1px
      margin 0 auto
      height 48px
      float right
      border-radius 9px
      text-align center
      text-shadow rgba(0,0,0,.15) 0 -1px 0
      user-select none
      background #eaeaea
      box-shadow 0 1px 3px rgba(0,0,0,.1), inset 0 -1px 2px rgba(0,0,0,.2)
      .btn-a
        box-shadow none
        color #fff
        display block
        border-radius 9px
        cursor not-allowed
        text-shadow none
        padding 2px 32px
        font-size 16px
        height 44px
        line-height 45px
        text-decoration none
    .btn-active
      background #567ce6 linear-gradient(#799cea,#567ce6)
      color #fff
      cursor pointer !important
</style>
