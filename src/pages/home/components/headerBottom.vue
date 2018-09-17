<template>
  <div class="wrap">
    <div class="content">
      <div class="content-warp">
        <ul class="item">
          <li>首页</li>
          <li>手机</li>
          <li>“足迹”系列</li>
          <router-link class="active" tag="li" to='/'>官方配件</router-link>
          <li>空气净化类</li>
          <li>品牌周边</li>
          <li>第三方商品</li>
          <li>全部</li>
          <li>服务</li>
          <li>企业团购</li>
        </ul>
      </div>
      <div class="serach">
        <div class="serach-content">
          <div class="serach-content-warp">
            <input type="text" class="serach-content-input" @focus='handleClickInputFocus' @blur='handleClickInputBlur'>
            <button class="serach-content-button"></button>
          </div>
          <div class="serach-content-title" v-show='visibility'>
            <a href="#">坚果Pro 2S</a>
            <a href="#">努比亚Z11 minS降1000元</a>
          </div>
        </div>
        <div class="keyword-list" v-show='!visibility'>
          <div class="keyword-list-arrow"><span></span></div>
          <div class="keyword-list-item">
            <ul class="keyword-list-item-li">
              <li class="first-child">坚果Pro 2S</li>
              <li>坚果 3</li>
              <li>闹钟无线充电座</li>
              <li>畅呼吸净化器</li>
              <li>移动电源</li>
              <li>T桖</li>
              <li>帆布鞋</li>
              <li>保护套</li>
              <li>口罩</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headerBottom',
  data () {
    return {
      visibility: true
    }
  },
  methods: {
    handleClickInputFocus () {
      this.visibility = false
    },
    handleClickInputBlur () {
      this.visibility = true
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrap
    height 75px
    background rgb(237,237,237)
    z-index 999
    .content
      height 75px
      border-bottom 1px solid #e1e1e1
      box-shadow 0 4px 10px 0 rgba(0,0,0,.05)
      position relative
      background #fff
      .content-warp
        padding 23px 0
        box-sizing border-box
        width 1220px
        height 75px
        margin 0 auto
        .item
          height 28px
        .active
          color black !important
          font-weight 700
        .item > li
          float left
          padding 0 15px
          color gray
          font-size 14px
          height 28px
          line-height 28px
        .item > li:hover
          color #5079d9
          cursor pointer
      .serach
        float right
        margin-left 40px
        width 376px
        box-sizing border-box
        position absolute
        right 150px
        top 23px
        .serach-content
          position relative
          height 32px
          padding-left 40px
          padding-right 15px
          border 1px solid rgba(0,0,0,.2)
          border-radius 16px
          box-size border-box
          background #fff
          box-shadow inset 0 1px 6px 0 rgba(0,0,0,.05)
          box-sizing border-box
          .serach-content-warp
            .serach-content-input
              width 100%
              height 32px
              font-size 14px
              color #333
              border none
              outline none
              background transparent
            .serach-content-button
              position absolute
              top 6px
              left 10px
              height 20px
              width 20px
              cursor pointer
              background-color transparent
              background-size contain
              background-image url('../../../../static/img/search.png')
              border none
              outline none
          .serach-content-title
            font-size 12px
            position absolute
            top 0px
            right 0px
            line-height 32px
            height 32px
            & :first-child
              text-decoration-line none
              color #3965cc
              border 1px solid #93b2f7
              background #e5efff
              margin-right 7px
              border-radius 10px
              height 20px
              padding 0 10px
              font-weight 700
            & :last-child
              margin-right 7px
              text-decoration none
              border-radius 10px
              height 20px
              padding 0 10px
              color #8aad37
              border 1px solid rgba(138,173,55,.6)
              background #f7fae1
              box-sizing border-box
              font-size 12px
              font-weight 700
        .keyword-list
          width 376px
          box-sizing border-box
          position absolute
          top 32px
          width 100%
          margin-top 1px
          z-index 9999
          .keyword-list-arrow
            width 0
            height 0
            border 10px solid
            border-color transparent transparent #cfcfcf
            position absolute
            left 40px
            & span
              width 0
              height 0
              border 10px solid
              border-color transparent transparent #fff
              position absolute
              top -9px
              left -10px
              bottom 0px
              display block
              z-index 999
          .keyword-list-item
            border 1px solid #cfcfcf
            border-radius 8px
            background #ffffff
            box-shadow 0 30px 75px 0 rgba(0,0,0,.3)
            overflow hidden
            position absolute
            top 20px
            width 100%
            font-size 14px
            .keyword-list-item-li > li
              padding 10px 20px
              color #666
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            ul li:hover
              font-weight bold
              color #5683ea
              cursor pointer
            .first-child
              padding-top 20px !important
            .keyword-list-item-li :last-child
              margin-bottom 15px !important
</style>
