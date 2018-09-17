<template>
    <div class="mask"  onselectstart="return false" v-show='false'>
      <div class="container">
        <div class="wrap">
          <div class="title">
            <h4>提示</h4>
          </div>
          <div class="content">
            <p class="notice">您确认删除{{info.title}}吗？</p>
          </div>
          <div class="btn">
            <button class="btn-cancel common" @click='cancel'>取消</button>
            <button class="btn-comfirm common" @click='deleteShop'>确认</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'deletePrompt',
  props: ['info'],
  data () {
    return {}
  },
  methods: {
    deleteShop () {
      console.log(this.info)
      this.$store.commit('deleteShop', this.info.itemInfo)
      this.info.visibility = false
    },
    cancel () {
      console.log(this.info)
      this.info.visibility = false
    }
  }
}
</script>
<style lang='stylus' scoped>
  .mask
    position fixed
    height 100%
    width 100%
    top 0
    left 0
    z-index 1000
    background-color rgba(0,0,0,.65)
    box-sizing border-box
    -moz-user-select none
    .container
      width auto
      .wrap
        width 306px
        background #fff
        box-sizing border-box
        overflow hidden
        min-width 200px
        border-radius 9px
        box-shadow 0 10px 30px rgba(0,0,0,.25)
        text-align left
        position fixed
        top 50%
        left 50%
        margin-top -100.5px
        margin-left -153px
        .title
          overflow hidden
          width 100%
          background-image linear-gradient(#fbfbfb,#ececec)
          & h4
            height 47px
            padding 0 15px
            border-radius 12px 12px 0 0
            border-bottom 1px solid #e6e6e6
            box-shadow 0 1px 7px rgba(0,0,0,.06)
            line-height 71px
            text-align center
            font-size 18px
            font-weight 700
            color #646464
            line-height 47px
        .content
          padding 18px 18px 18px 20px
          box-sizing border-box
          font-size 15px
          line-height 24px
          color #666
          overflow hidden
          min-width 220px
          .notice
            font-weight 700
            color #5f7ed7
        .btn
          width 100%
          background #f5f5f5
          text-align center
          border-top 1px solid #e9e9e9
          justify-content center
          padding 0 9px
          font-size 0
          display flex
          box-sizing border-box
          .common
            border-radius 3px
            padding 0 10px
            box-sizing border-box
            outline none
            margin 9px 0
            font-weight 700
            position relative
            cursor pointer
            text-shadow rgba(0,0,0,.15) 0 -0.5px 0
            height 30px
            width 50%
          .btn-comfirm
            color #fff
            background #5f7ed7 linear-gradient(#6e98f4,#4b77ee)
            border .5px solid #6586e4
            margin-left 10px
          .btn-cancel
            color #646464
            border .5px solid #d7d7d7
            background-image linear-gradient(#f8f8f8,#f2f2f2)
            margin-right 10px
</style>
