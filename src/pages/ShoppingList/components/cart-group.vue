<template>
<div>
    <div class="cart-group">
    <div class="divide">
      <div class="cart-items" v-for='(item, index) of carData' :key='index'>
        <div class="cart-item">
          <div class="checkbox-container">
            <span class="m-blue-checkbox-new" @click.self='handleClick'></span>
          </div>
          <div class="item-wrapper">
            <div class="items-thumb">
              <img :src="item.ali_image" alt="">
            </div>
            <div class="name hide-row">
              <div class="name-table">
                <span>{{item.title}}</span>
                <ul class="attribute clearfix">
                  <li>{{item.spec_json.show_name}}</li>
                </ul>
              </div>
            </div>
            <div class="operation">
              <span class="items-delete-btn" @click='deleteBtn(item.sku_id, item.title)'></span>
            </div>
            <div>
              <div class="subtotal">
                <i>￥</i>
                <span>{{item.count*item.price}}</span>
              </div>
              <div class="item-cols-num">
                <div class="quantity">
                  <span class="button down"></span>
                  <span class="num">{{item.count}}</span>
                  <span class="button up"></span>
                </div>
              </div>
              <div class="price">
                <i>￥</i>
                <span>{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <delete-prompt v-show='info.visibility' :info='info'></delete-prompt>
</div>
</template>

<script>
import deletePrompt from './deletePrompt'
import cartBottom from './cart-bottom'
export default {
  name: 'cartGroup',
  props: [''],
  components: {
    cartBottom,
    deletePrompt
  },
  data () {
    return {
      info: {
        visibility: false,
        itemInfo: null,
        title: ''
      }
    }
  },
  computed: {
    carData () {
      return this.$store.state.shopCarPanelData
    }
  },
  methods: {
    handleClick (e) {
      let result = false
      e.target.classList.forEach((item) => {
        if (item.indexOf('checkbox-on') > -1) {
          e.target.classList.remove('checkbox-on')
          result = true
        }
      })
      if (!result) {
        e.target.classList.add('checkbox-on')
      }
    },
    deleteBtn (data, title) {
      console.log(data)
      this.info.visibility = true
      this.info.itemInfo = data
      this.info.title = title
      console.log(this.info.itemInfo)
    }
  }
}
</script>
<style lang='stylus' scoped>
.cart-group
  position relative
  background #fff
  .divide
    max-height 500px
    overflow-x hidden
    overflow-y auto
    .cart-items
      position relative
      height 140px
      margin-left 74px
      .checkbox-container
        float left
        left -74px
        position absolute
        top 0
        width 74px
        height 20px
        padding 60px 0 0 31px
        font-size 12px
        color #999
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
      .item-wrapper
        &::after
          content ''
          display block
          visibility hidden
          height 0
          clear both
        .items-thumb
          position relative
          margin-top 30px
          overflow hidden
          float left
          & img
            width 80px
            height 80px
            float left
            & img::after
              position relative
              left 0
              top 0
              right 0
              bottom 0
              border-radius 3px
              border 0 solid hsla(0,0%,100%,.1)
              box-shadow inset 0 0 0 1px rgba(0,0,0,.06)
        .name
          width 380px
          margin-left 20px
          color #323232
          display table
          float left
        .hide-row
          overflow hidden
          word-break keep-all
          white-space nowrap
          text-overflow ellipsis
          .name-table
            display table-cell
            vertical-align middle
            height 140px
            & span
              color #333
              font-size 16px
              cursor pointer
            .attribute
              color #999
              font-size 12px
              padding-top 4px
              line-height 17px
        .item-cols-num, .operation, .price, .subtotal
          overflow hidden
          width 137px
          text-align center
          color #666
          line-height 140px
          float right
        .operation
          padding 58px 0 0
          font-size 12px
          line-height 24px
          cursor pointer
          .items-delete-btn
            display block
            width 24px
            height 24px
            margin 0 auto
            color #c2c2c2
            background url(//static.smartisanos.cn/index/assets/images/delete-btn-icon.a35bf2437e19d8e7bb7cec7fc056c0ac.jpg)
            background-size 100% auto
        .subtotal
          font-weight 700
          font-size 14px
        .item-cols-num
          padding-top 50px
          line-height 40px
          overflow visible
          .quantity
            width 112px
            height 40px
            padding-top 4px
            margin 0 auto
            line-height 40px
            position relative
            .button
              overflow hidden
              float left
              display inline-block
              width 34px
              height 34px
              border-radius 50%
              margin-right 5px
              background url(//static.smartisanos.cn/index/assets/images/cart-updown.8303731e1531d650689206037c8318aa.jpg) no-repeat
              background-image url(//static.smartisanos.cn/index/assets/images/cart-updown.8303731e1531d650689206037c8318aa.jpg)
              background-size 108% auto
              line-height 40px
              text-indent -9999em
              user-select none
              cursor pointer
            .down
              background-position -1px -65px
            .num
              width 36px
              height 18px
              border none
              border-radius 3px
              line-height 18px
              text-align center
              font-size 14px
              position relative
              overflow hidden
              float left
              display inline-block
              margin 7px 0 0
            .up
              float right
              margin 0

</style>
