<template>
  <div class="box-inner">
      <div class="cart-table-title goods-cart-table-title">
        <span class="name">商品信息</span>
        <span class="subtotal">应付金额</span>
        <span class="num">数量</span>
        <span class="price">单价</span>
      </div>
      <div class="cart-table">
        <div class="item-list">
          <div class="cart-group">
            <div class="cart-items" v-for='(item, index) of getCheckoutGoods' :key='index'>
              <div class="cart-item">
                <div class="item-wrapper">
                  <div class="items-thumb">
                    <img height="80" width="80" :src="item.ali_image" :alt="item.title">
                    <a :title='item.title'></a>
                    </div>
                    <div class="name hide-row">
                      <div class="name-table">
                        <a :title="item.title">{{item.title}}({{item.spec_json.show_name}})</a>
                      </div>
                    </div>
                    <div class="subtotal">
                      <i>¥</i> <span>{{item.price}}</span>
                    </div>
                    <div class="item-cols-num">{{item.count}}</div>
                    <div class="price"><i>¥</i> <span>{{item.price*item.count}}</span></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data () {
    return {

    }
  },
  computed: {
    getCheckoutGoods () {
      return this.$store.getters.getCheckoutGoods
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
  height 38px
  padding 0 20px
  background #eee
  font-size 12px
  border-bottom 1px solid #dbdbdb
  border-top-color rgba(0,0,0,.08)
  & span
    float right
    text-align center
    color #838383
  .name
    float left
    text-align left
  .num, .operation, .price, .subtotal
    width 137px
  .subtotal
    text-align right
  .num
    margin 0 -10px 0 70px
.cart-table
  .item-list
    .cart-group
      background #fff
      border-radius 0 0 8px 8px
      max-height 440px
      overflow-x hidden
      overflow-y auto
      .cart-items
        position relative
        height 110px
        margin-left 20px
        margin-right 20px
        .cart-item
          .item-wrapper
            &::after
              content ''
              visibility hidden
              height 0
              clear both
              display block
            .items-thumb, .name
              float left
            .items-thumb
              position absolute
              padding-top 15px
              overflow hidden
              position relative
              & a
                position absolute
                left 0
                top 15px
                bottom 0
                right 0
                border-radius 3px
                border 0 solid hsla(0,0%,100%,.1)
                box-shadow inset 0 0 0 1px rgba(0,0,0,.06)
            .items-thumb, .items-thumb img
              width 80px
              height 80px
            .name
              width 380px
              margin-left 30px
              color #323232
              display table
              .name-table
                height 110px
                position absolute
                left 200px
                text-align center
                line-height 110px
                font-size 14px
            .subtotal
              font-weight 700
              text-align right
              font-size 14px
            .item-cols-num, .price, .subtotal
              overflow hidden
              float right
              width 137px
              height 70px
              color #666
              line-height 110px
              font-size 14px
              font-weight 700
            .item-cols-num
              padding-top 35px
              line-height 40px
              margin 0 -10px 0 70px
              overflow visible
              text-align center
            .price
              text-align center
</style>
