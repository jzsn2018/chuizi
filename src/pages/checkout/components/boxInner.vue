<template>
  <div class="box-inner">
    <div class="address-panel">
      <ul class="fn-clear">
        <li class="address-item add-new">
          <p>使用新地址</p>
        </li>
      </ul>
    </div>
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
  padding 30px 30px 0
  background #fff
  border-radius 0 0 8px 8px
  .address-panel
    border-radius 0 0 8px 8px
    font-size 14px
    color #626262
    &::after
      content ''
      display block
      font-size 0
      height 0
      clear both
      visibility hidden
    .address-item
      position relative
      overflow hidden
      float left
      width 276px
      height 158px
      margin-bottom 30px
      padding  19px 14px 0 19px
      border 1px solid #e5e5e5
      border-radius 3px
      box-sizing border-box
      background #fafafa
      line-height 14
      text-align left
      word-wrap break-word
      color #626262
      cursor pointer
      user-select none
      &::before
        content '+'
        display block
        position absolute
        top 54px
        left 50%
        height 24px
        margin-left -10px
        line-height 24px
        text-align center
        font-size 24px
        color #626262
      & p
        height 14px
        padding-top 85px
        line-height 14px
        text-align center
        color #999
      &::after
        content ''
        display block
        font-size 0
        height 0
        clear both
        visibility hidden
</style>
