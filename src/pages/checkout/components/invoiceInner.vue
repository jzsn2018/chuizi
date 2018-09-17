<template>
  <div class="box-inner">
    <p class="invoice-detail">
      发票类型：电子发票
      <img class="invoice-tips" src='../../../../static/img/i.png'/>
    </p>
    <div class="invoice-detail">
      <p>发票抬头：
        <span class="blue-radio blue-radio-on"></span>
        <span>个人</span>
        <span class="blue-radio"></span>
        <span>单位</span>
      </p>
    </div>
      <p class="invoice-detail">发票内容：购买商品明细</p>
      <p class="invoice-label">电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。</p>
  </div>
</template>

<script>

export default {
  name: 'boxInner',
  props: [''],
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.box-inner
  position relative
  padding 22px 30px 28px
  background #fff
  border-radius 0 0 8px 8px
  font-size 14px
  .invoice-detail
    display table
    height 36px
    line-height 36px
    color #666
    vertical-align middle
    position relative
    & img
    display table-cell
      vertical-align middle
      margin-left 5px
      width 18px
    .blue-radio
      top 4px
      margin 0 3px 0 6px
      overflow hidden
      display inline-block
      position relative
      width 10px
      height 10px
      padding 4px
      background linear-gradient(#f5f6f6,#fdfdfd)
      border 1px solid #e6e6e6
      border-radius 10px
      box-shadow inset 0 2px 4px rgba(0,0,0,.05)
      cursor pointer
    .blue-radio-on
      background #5079d9
      background-size 10%
  .invoice-label
    position relative
    padding-top 25px
    margin-top 11px
    border-top 1px solid #e5e5e5
    line-height 12px
    text-indent 10px
    font-size 12px
    color #999
  .invoice-label::before
    content '*'
    position absolute
    left 2px
    top 27px
    text-indent 0
</style>
