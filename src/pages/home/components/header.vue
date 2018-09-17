<template>
  <div class="wrap">
    <img class="container-logo" src="http://static.smartisanos.cn/index/assets/images/logo.3a7265b74f867e3fca91f1fc175de02d.png">
    <div class="wrap-container">
      <ul class="wrap-container-item">
        <router-link class="active" tag='li' to='/'>在线商城</router-link>
        <li>坚果 Pro 2S</li>
        <li>坚果 R1</li>
        <li>坚果 TNT 工作站</li>
        <li>Smartisan OS</li>
        <li>欢喜云</li>
        <li>应用</li>
        <li>论坛</li>
        <li>荣誉与奖项</li>
      </ul>
    </div>
    <ul class="nav-right">
      <li class="icon-left"><a href="#" class="icon-man">个人中心</a></li>
      <li class="icon-right" @mouseenter="changeCarPanel" ref='ballRect'>
        <a href="#" class="icon-shop-car" >
          <span class="icon-title"></span>
        </a>
        <transition
          name='ball'
          @before-enter="beforeEnter"
          @enter="Enter"
          @after-enter="afterEnter"
          :css='true'
        >
          <div class="addcart-mask" v-show='ball.show'>
            <img class="mask-item" ref='ball'>
          </div>
        </transition>
      </li>
    </ul>
    <home-car-panel v-show='carPanelData'  @mouseleave.native="changeCarPanel"></home-car-panel>
  </div>
</template>
<script>
import homeCarPanel from './shopCarPanel'
export default{
  name: 'headerNav',
  components: {
    homeCarPanel
  },
  computed: {
    carPanelData () {
      return this.$store.state.visibilty
    },
    ball () {
      return this.$store.state.ball
    }
  },
  data () {
    return {}
  },
  methods: {
    changeCarPanel () {
      this.$store.commit('changeshow')
    },
    beforeEnter (el) {
      let rect = this.ball.el.getBoundingClientRect()
      let rectEl = this.$refs.ballRect.getBoundingClientRect()
      console.log(rectEl)
      let ball = this.$refs.ball
      console.log(ball)
      // 购物车中心点到视窗左侧的距离 - 按钮中心点到视窗左侧的距离
      let x = (rectEl.left + 16) - (rect.left + rect.width / 2)
      // 这个也是计算相应的差值和上面的X一样
      let y = rect.top + rect.height / 2 - rectEl.top + 5 - 16
      console.log(rect.top + rect.height / 2)
      console.log(el)
      el.style.transform = `translate3d(0,${y}px,0)`
      ball.style.transform = `translate3d(-${x}px,0,0)`
      ball.src = this.ball.img
      console.log(this.ball.img)
    },
    Enter (el) {
      // 这个操作是让浏览器触发重新渲染
      let a = el.offsetHeight
      // 这个操作纯粹是为了ESlint不报错而设置的，没有其他含义
      el.a = a
      el.style.transform = 'translate3d(0,0,0)'
      this.$refs.ball.style.transform = 'translate3d(0,0,0)'
    },
    afterEnter () {
      this.$store.commit('ballshow', false)
      console.log('ballshow')
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrap
  background linear-gradient(90deg,#222325,#3b3c3f,#222325)
  height 45px
  width 100%
  .container-logo
      width 18px
      margin-left 21px
      padding 13px 0 0
      float left
  .wrap-container
    width 1220px
    margin 0 auto
    height 37px
    .wrap-container-item
      width 835px
      box-sizing border-box
      float right
      margin 9px 181px 0 0
      height 28px
      & li
        float left
        color #9b9c9d
        font-size 12px
        padding  0 20px
        display inline-block
        line-height 28px
        font-weight 600
        height 28px
      &:hover
        cursor pointer
      & >>> li:hover
        color #e5e5e5
      .active
        font-weight bold
        color #e5e5e5
  .nav-right
    position absolute
    top 11px
    right 30px
    box-sizing border-box
    list-style none
    height 20px
    .icon-left
      margin-right 41px
      position absolute
      float left
      z-index 999
      top 0
      right 0
      bottom 0
      .icon-man::before
        content ''
        position absolute
        width 20px
        height 20px
        left 0
        top 0
        bottom 0
        background url(//static.smartisanos.cn/index/assets/images/avatar-and-cart.c2634628597594cf0fdab831abe6499d.png) 50% no-repeat
        background-position 1px 2px
        background-size 180%
      .icon-man
        position relative
        float left
        text-indent -99999px
        display block
        margin-left 8px
    .icon-right
      height 20px
      position relative
      right 0
      left 0
      top 11px
      width 21px
      right 0
      top 1px
      bottom 0
      z-index 1
      .icon-shop-car::before
        background url(//static.smartisanos.cn/index/assets/images/avatar-and-cart.c2634628597594cf0fdab831abe6499d.png) no-repeat
        background-position 0 -17px
        background-size 180%
        content ''
        position absolute
        left 0
        top 1px
        bottom 0
        width 20px
      .icon-shop-car
        display block
        left 0
        right 0
        top 0
        bottom 0
        z-index 1
        position relative
        height 20px
        text-indent -9999px
        .icon-title
          display block
          width 6px
          height 6px
          border-radius 20px
          position absolute
          top 0
          left 12px
          background red
      .ball-enter-active
        transition .5s cubic-bezier(.17,.67,.69,1.17)
      .mask-item
        transition .5s cubic-bezier(0,0,1,1)
        pointer-events: none;
        width: 28px;
        height: 28px;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 3px 8px rgba(0,0,0,.1);
        background-size: contain;
        transform: translate3d(0,0,0);
</style>
