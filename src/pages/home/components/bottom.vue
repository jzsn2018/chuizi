<template>
<div class="wrap">
  <div class="content">
    <ul class="item">
      <li>
        <span class="online"></span>
        <h5>在线客服</h5>
        <h6>周一至周日 9:00-18:00</h6>
      </li>
      <li>
        <span class="return"></span>
        <h5>7 天无理由退货</h5>
        <h6>7 天无理由退货 请放心购买</h6>
      </li>
      <li>
        <span class="exchange-goods"></span>
        <h5>15 天免费换货</h5>
        <h6>15 天内如遇质量问题 免费换货</h6>
      </li>
      <li>
        <span class="delivery-goods"></span>
        <h5>满 150 元免运费</h5>
        <h6>全场使用顺丰及京东快递</h6>
      </li>
    </ul>
  </div>
</div>
</template>

<script>

export default {
  name: 'bottomNotice',
  props: [''],
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.wrap
  background rgb(237,237,237)
  padding 10px 0 25px 0
  .content
    width 1220px
    box-sizing border-box
    margin 0 auto
    .item
      background #ffffff
      border-radius 8px
      border 1px solid #dcdcdc
      border-color rgba(0,0,0,.14)
      box-shadow 0 3px 8px -6px rgba(0,0,0,.1)
      overflow hidden
    .item li
      width 304px
      height 153px
      text-align center
      float left
    .item li span
      display block
      background url(//static.smartisanos.cn/index/assets/images/shopping-info.1d658b7a09859efaa72520531271dc04.png) no-repeat 0 0
      margin 33px auto 5px
      width 32px
      height 36px
      opacity .625
    .online
      width 36px !important
    .return
      background-position -50px 0 !important
    .exchange-goods
      background-position -100px 0 !important
    .delivery-goods
      background-position -150px 0 !important
    .item h5
      font-size 15px
      color #000
      line-height 25px
    .item h6
      font-size 12px
      color #a8a8a8
      line-height 24px
</style>
