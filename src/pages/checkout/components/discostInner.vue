<template>
  <div class="coupon-empty-container">
    <div></div>
    <p>暂无优惠券</p>
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
  methods: {}
}
</script>
<style lang='stylus' scoped>
.coupon-empty-container
  padding 0 24px
  height 195px
  display flex
  flex-direction column
  justify-content center
  align-items center
  background #fff
  border-radius 0 0 8px 8px
  & div
    width 72px
    height 52px
    background -webkit-image-set(url(//static.smartisanos.cn/index/assets/images/none-coupon.82aff7569aa0f2a2cf9eac07cd2d0d73.png) 1x,url(//static.smartisanos.cn/index/assets/images/none-coupon@2x.b5b9e96ecd738e2743cced0760d6fad6.png) 2x) no-repeat
  & p
    font-size 18px
    color #d9d9d9
</style>
