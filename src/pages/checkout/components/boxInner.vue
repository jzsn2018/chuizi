<template>
<div>
  <div class="box-inner">
    <div class="address-panel">
      <ul class="fn-clear">
      <li class="address-item" v-for='(item, index) of receiveInfo' :key='index' :class="{'selected':item.default}" @click='chooseDefault(index)'>
        <p class="name hide-row">{{item.name}}</p>
        <p class="mobile">{{item.phone}}</p>
        <p class="cascading">{{item.province}}{{item.city}}{{item.county}}</p>
        <p class="detail">{{item.add}}</p>
        <div class="operation-section">
          <span class="update-btn">修改</span>
          <span class="delete-btn">删除</span>
        </div>
      </li>
        <li class="address-item add-new" @click='HandleClick'>
          <p>使用新地址</p>
        </li>
      </ul>
    </div>
  </div>
  <address-prompt v-show="visiable"></address-prompt>
</div>
</template>

<script>
import addressPrompt from './addressPrompt'
export default {
  name: 'boxInner',
  props: [''],
  data () {
    return {
      visiable: false
    }
  },
  components: {
    addressPrompt
  },
  computed: {
    receiveInfo () {
      return this.$store.state.receiveInfo
    }
  },
  methods: {
    HandleClick () {
      this.visiable = !this.visiable
    },
    chooseDefault (index) {
      this.$store.commit('chooseDefault', index)
    }
  }
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
      margin-right 20px
      .name
        width 100%
        height 16px
        padding-right 20px
        line-height 16px
        font-size 16px
        color #666
      .hide-row
        overflow hidden
        word-break keep-all
        text-overflow ellipsis
      .mobile
        height 14px
        padding-top 17px
        line-height 14px
        color #999
      .cascading
        padding-top 6px
        line-height 24px
        color #999
      .detail
        line-height 24px
        color #999
      .operation-section
        visibility hidden
        position absolute
        left 0
        bottom 0
        width 100%
        height 28px
        background #e1e1e1
        border-top 1px solid #e1e1e1
        transition all .2s ease
        transform translateY(29px)
        .update-btn
          display block
          height 28px
          background #fff
          text-align center
          line-height 28px
          font-size 12px
          transition background .15s ease
    .selected
      background #fff
      border-color #6a8fe5
    .selected::after
      content ''
      display block
      position absolute
      right 17px
      top 19px
      font-size 24px
      background-image url('../../../../static/img/true.png')
      height 22px
      width 22px
    .add-new::before
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
    .add-new p
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
