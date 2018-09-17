<template>
<div class="shop">
  <div class="item">
    <ul>
      <li v-for='item of carPanelData' :key="item.sku_id">
        <div class="item-wrap">
          <div class="item-content" @mouseenter='handleMouseenter'>
            <div class="item-thumb"><img :src="item.ali_image" class="item-thumb-img"></div>
            <div class="item-desc">
              <div class="cart-cell">
                <h4>{{item.title}}</h4>
                <p class="attrs"><span class="attrs-title">标准版</span><span class="attrs-title modefiy">{{item.spec_json.show_name}}</span></p>
                <h6>
                  <span class="price-icon">￥</span>
                  <span class="price-num">{{item.price}}</span>
                  <span class="item-num">×{{item.count}}</span>
                  </h6>
              </div>
            </div>
            <div class="del-btn" ref='delBtn' @click = 'deleteShop(item.sku_id)'>删除</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="shopInfo">
      <p>共 <strong>{{this.$store.getters.totalCount}}</strong> 件商品</p>
      <h5>合计：
        <span class="price-icon">¥</span>
        <span class="price-num">{{this.$store.getters.totalPrice}}</span>
      </h5>
      <h6>
        <router-link class="nav-cart-btn" to="shoppingList" tag='span'>去购物车</router-link>
      </h6>
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
    carPanelData () {
      return this.$store.state.shopCarPanelData
    }
  },
  methods: {
    handleMouseenter () {
      this.$refs.delBtn[0].style.display = 'block'
    },
    deleteShop (data) {
      this.$store.commit('deleteShop', data)
    }
  }
}
</script>
<style lang='stylus' scoped>
.shop
    position absolute
    top 0
    right 0
    width 100%
    min-height 201px
    .item
      max-height 423px
      & ul
          background #fff
          border 0 solid hsla(0,0%,100%,.01)
          box-shadow 0 0 0 1px rgba(0,0,0,.06),0 20px 40px rgba(0,0,0,.15)
          max-height 360px
          overflow-x hidden
          overflow-y auto
      .item-wrap
        border-top none
        border-radius 8px 8px 0 0
        overflow hidden
        width 100%
        .item-content
          height 80px
          padding 20px
          position relative
          .del-btn
            position absolute
            cursor pointer
            display block
            width 20px
            height 20px
            top 50%
            right 20px
            margin-top -11px
            background url(//static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png) -50px -60px no-repeat
            background-size 240px 107px
            text-indent -9999em
          .item-thumb
            position relative
            float left
            width 80px
            height 80px
            border-radius 3px
            &:before
              content ''
              position absolute
              right 0
              left 0
              bottom 0
              z-index 2
              border 0 solid transparent
              box-shadow inset 0 0 0 1px rgba(0,0,0,.06)
              border-radius 3px
              height 100%
            .item-thumb-img
              width 100%
          .item-desc
            margin-left 98px
            display table
            width 205px
            height 80px
            & h4
              color #000
              font-weight 700
              width 185px
              overflow hidden
              word-break keep-all
              text-overflow ellipsis
              line-height 16px
              font-size 14px
              margin-bottom 10px
            .cart-cell
              display table-cell
              vertical-align middle
              .attrs
                font-size 0
                .attrs-title
                  position relative
                  display inline-block
                  margin-right 20px
                  font-size 14px
                  line-height 18px
                  color #999
                  &::before
                      position absolute
                      content ''
                      border-left 1px solid #e5e5e5
                      top 3px
                      right -12px
                      height 12px
                .modefiy
                  &::before
                    border-left none
            .cart-cell h6
              color #cacaca
              font-size 12px
              line-height 14px
              margin-top 15px
              font-weight 400
              .price-icon
                color #d44d44
                display inline-block
                font-weight 700
              .price-num
                display inline-block
                font-weight 900
                margin-left 5px
                font-size 14px
                color #d44d44
              .item-num
                color #cacaca
                margin-left 10px
                display inline-block
    .shopInfo
      position relative
      padding 20px
      height 40px
      border-top 1px solid #f0f0f0
      border-radius 0 0 8px 8px
      box-shadow inset 0 -1px 0 hsla(0,0%,100%,.5), 0 -3px 8px rgba(0,0,0,.04)
      background linear-gradient(#fafafa,#f5f5f5)
      & p
        margin-bottom 4px
        line-height 16px
        font-size 12px
        color #c1c1c1
      & h5
        line-height 20px
        font-size 14px
        color #6f6f6f
        & :first-child
          color #de4037
          display inline-block
          font-weight 700
          margin-right 5px
          font-size 12px
      & span
        font-size 18px
        color #de4037
        display inline-block
        font-weight 700
      & h6
        position absolute
        right 20px
        top 20px
        width 108px
        .nav-cart-btn
          display block
          background linear-gradient(#688fe8,#5079e1)
          border-radius 6px
          font-weight 700
          box-shadow inset 0 1px 0 hsla(0,0%,100%,.2), 0 1px 3px rgba(0,0,0,.2)
          line-height 38px
          text-align center
          color #fff
          text-shadow 0 -1px 0 rgba(0,0,0,.15)
          cursor pointer
</style>
