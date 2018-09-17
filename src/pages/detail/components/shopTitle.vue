<template>
  <div class="shop-title">
    <div class="warpper">
      <h1 class="bar-text">您已选择了</h1>
      <div class="bar-device-info">
        <h1 class="clearfix"><span class="title">{{itemInfo.title}} × {{goodNum}} </span></h1>
        <h2>{{itemColorInfo}}</h2>
      </div>
      <router-link class="bar-btn" tag='div' to='/shoppingList'><span>现在购买</span></router-link>
      <div class="bar-btn add-cart-btn">加入购物车</div>
      <div class="no-discount-price">
        <div class="bar-price">
          <i>￥</i>
          <span>{{totalPrice}}</span>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shopTitle',
  props: ['itemInfo', 'goodNum', 'itemIndex', 'itemColor'],
  data () {
    return {

    }
  },
  computed: {
    itemColorInfo () {
      return this.itemColor || '您还未选择颜色'
    },
    totalPrice () {
      return this.itemInfo.price * this.goodNum
    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
  .shop-title
    position fixed
    width 100%
    height 60px
    bottom 0
    left 0
    background #fafafa
    border-top 1px solid #e3e3e3
    box-shadow 0 -1px 3px rgba(0,0,0,.04)
    z-index 25
    .warpper
      width 1220px
      line-height 20px
      margin 12px auto 0
      .bar-text
        color #707070
        font-size 12px
        font-weight 500
        margin-right 20px
        float left
      .bar-device-info
        position relative
        margin-right 20px
        font-size 14px
        float left
        & > h2
          font-size 12px
          color #9d9d9d
        .clearfix
          font-size 100%
          font-weight 700
        & ::after
          visibility hidden
          display block
          font-size 0
          content ''
          height 0
          clear both
          .title
            float left
            color #707070
      .bar-btn
        width 118px
        height 38px
        line-height 38px
        text-align center
        color #fff
        cursor pointer
        margin-left 10px
        border-radius 6px
        background-image linear-gradient(#6383c6,#4262af)
        background-color #6383c6
        margin-top -2px
        padding 1px
        float right
        & span
          display block
          height 34px
          line-height 34px
          border-radius 6px
          padding 2px 0
          background-color #5f7ed7
          background-image linear-gradient(#6f97e5,#527ed9)
          box-shadow inset 0 1px 2px #7ea1e8
          text-shadow 0 -1px 0 #4f70b3
          color #fff
      .add-cart-btn
        border 1px solid #dedede
        color #646464
        font-weight 700
        background-image linear-gradient(#fbfbfb,#f5f5f5)
        background-color #f8f8f8 !important
      .no-discount-price
        float right
        width 110px
        margin-right 20px
        text-align right
      .bar-price
        position relative
        font-size 20px
        font-weight bolder
        line-height 40px
        color #d44d44
        text-align right
</style>
