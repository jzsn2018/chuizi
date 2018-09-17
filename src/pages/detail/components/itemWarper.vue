<template>
  <div>
    <div class="item-wrapper">
      <div class="header"></div>
      <div class="gray-box">
        <div class="gallery-wrapper">
          <div class="gallery">
            <div class="thumbnail">
              <ul>
                <li v-for='(item,index) of itemInfo.ali_images' :key='index' @click='changeImg(index)' class="liImage">
                  <img :src="item">
                </li>
              </ul>
            </div>
            <div class="thumb">
              <ul>
                <li><img :src="itemInfo.ali_images[itemIndex]" alt=""></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="item-information">
          <div class="item-title">
            <h1>{{itemInfo.title}}</h1>
            <h2>{{itemInfo.sub_title}}</h2>
            <div class="item-price">
              <span class="icon">￥</span>
              <span class="num">{{itemInfo.price}}</span>
            </div>
          </div>
          <div class="item-spec-color">
            <div class='item-spec'>
              <span class="spec-title">颜色选择</span>
              <ul class="spec-info">
                <li v-for='(item,index) of itemInfo.sku_list' :key='index' @click='cololChange(item, index)'><img :src="item.image"></li>
              </ul>
            </div>
          </div>
          <div class="item-do-count-wrapper">
            <div class="item-do-count">
              <span class="do-count-title">数量选择</span>
              <div class="do-count">
                <div class="select">
                  <span class="select-down" @click='subNum' :class="{'select-disabled': goodNum <= 1}">-</span>
                  <span class="select-num">{{goodNum}}</span>
                  <span @click='addNum' class="select-up" :class="{'select-disabled': goodNum >= itemInfo.limit_num}">+</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sku-custom-tips-wrapper">
            <div class="sku-custom-tips">
              <span class="sku-custom-tips-title">服务说明</span>
              <div class="sku-custom-tips-text">
                <p>实物可能因温度、压力、光线等原因，与渲染图存在少许差异</p>
                <p>拆封后不支持七天无理由退货</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <shop-title :itemInfo='itemInfo' :goodNum='goodNum' :itemIndex='itemIndex' :itemColor='itemColor'></shop-title>
  </div>
</template>

<script>
import itemDatas from '@/lib/newItemsData'
import shopTitle from './shopTitle'
export default {
  name: 'itemWarper',
  props: [''],
  components: {
    shopTitle
  },
  data () {
    return {
      id: this.$route.query.id,
      itemDatas,
      itemIndex: 0,
      goodNum: 1,
      itemColor: ''
    }
  },
  computed: {
    itemInfo () {
      let iteminfo = this.itemDatas.filter((item) => {
        return Number(item.sku_id) === Number(this.id)
      })[0]
      return iteminfo
    },
    showDisabled () {
      return this.goodNum > this.itemInfo.limit_num
    }
  },
  methods: {
    changeImg (index) {
      this.itemIndex = index
      var dom = document.querySelectorAll('.liImage')
      for (var i = 0; i < dom.length; i++) {
        dom[i].classList.remove('on')
      }
      dom[index].classList.add('on')
    },
    subNum (e) {
      if (this.goodNum > 1) {
        this.goodNum--
      }
    },
    addNum (e) {
      if (this.goodNum < this.itemInfo.limit_num) {
        this.goodNum++
      }
    },
    cololChange (item, index) {
      console.log(event.target)
      var dom = document.querySelector('.spec-info').getElementsByTagName('li')
      for (var i = 0; i < dom.length; i++) {
        dom[i].classList.remove('active')
      }
      event.currentTarget.classList.add('active')
      this.itemIndex = index
      this.itemColor = item.color
    }
  }
}
</script>
<style lang='stylus' scoped>
  .item-wrapper
    position relative
    clear both
    min-height 600px
    padding-bottom 60px
    background #ededed
    .header
      padding-bottom 20px
      background #ededed
    .gray-box
      overflow hidden
      width 1220px
      margin 0 auto 20px
      background #fff
      border-radius 8px
      border 1px solid #dcdcdc
      box-shadow 0 3px 8px -6px rgba(0,0,0,.1)
      box-sizing border-box
      padding 60px
      & :first-child
        display table
      .gallery-wrapper
        vertical-align top
        display table-cell
        .gallery
          float left
          width 540px
          display table-cell
          .thumbnail
            display table-cell
            vertical-align middle
            & :first-child
              margin-top 0
            & li
              width 54px
              height 54px
              padding 12px
              border 1px solid rgba(0,0,0,.06)
              cursor pointer
              border-radius 5px
              margin-top 10px
            .on
              padding 10px
              border 3px solid rgba(0,0,0,.2)
            & img
              display block
              max-width 100%
              height auto
              box-sizing border-box
          .thumb
            display table-cell
            vertical-align middle
            & ul
              margin-left 20px
              width 440px
              height 440px
              position relative
            & img
              display block
              max-width 100%
              height auto
      .item-information
        display table-cell
        vertical-align middle
        width 610px
        .item-title
          width 100%
          position relative
          border-bottom 1px solid rgba(0,0,0,.08)
          & h1
            width 420px
            font-size 24px
            line-height 30px
            color #000
            padding 0 0 20px
          & h2
            width 420px
            color #999
            font-size 14px
            line-height 18px
            padding-bottom 28px
            font-weight 400
          .item-price
            position absolute
            right 9px
            bottom 28px
            & span
              display block
              color #d44d44
              font-weight 700
              font-size 16px
              line-height 20px
              text-align right
            .icon
              font-weight bolder
              display inline-block
            .num
              font-size 24px
              padding-left 3px
              display inline-block
        .item-spec-color
          margin-top 30px
          overflow hidden
          .item-spec
            position relative
            .spec-title
              width 85px
              height 39px
              line-height 39px
              color #666
              font-size 14px
              float left
            .spec-info
              position relative
              float left
              width 472px
              height 100%
              padding-bottom 30px
              border-bottom 1px dashed rgba(0,0,0,.08)
              & :first-child
                margin-left 0px
              & li
                position relative
                float left
                width 36px
                height 36px
                cursor pointer
                font-size 0
                margin-left 34px
                padding 3px
                border-radius 50%
                display inline-block
                border 2px solid #e5e5e5
                width 28px
                height 28px
                & img
                  display block
                  border-radius 50%
                  width 28px
                  height 28px
              .active
                border 2px solid #999
        .item-do-count-wrapper
          margin 0
          padding 30px 0
          border-bottom 1px solid rgba(0,0,0,.08)
          .item-do-count
            position relative
            .do-count-title
              width 85px
              height 28px
              line-height 28px
              color #666 !important
              font-size 14px !important
              float left
            .do-count
              position relative
              float left
              width 472px
              height 100%
              .select
                position absolute
                left 0
                top -3px
                overflow hidden
                width 128px
                height 40px
                text-align center
                .select-disabled
                  cursor not-allowed !important
                .select-down
                  margin 0
                  position relative
                  float left
                  display inline-block
                  width 36px
                  height 38px
                  text-indent -9999em
                  cursor pointer
                  line-height 18px
                  user-select none
                  &::before
                    content ''
                    position absolute
                    left -4px
                    right -4px
                    top 0
                    height 45px
                    background url(//static.smartisanos.cn/index/assets/images/updown-select-icon.ce7e0ffb6ed63599a7537ee7ca06827c.png) no-repeat
                    background-position 0 -60px
                    background-size 100% auto
                .select-num
                  position relative
                  float left
                  display inline-block
                  width 56px
                  height 18px
                  margin 7px 0 0
                  border none
                  line-height 18px
                  text-algin center
                  font-size 14px
                  font-weight 700
                  color #454549
                .select-up
                  position relative
                  float left
                  display inline-block
                  width 36px
                  height 38px
                  text-indent -9999em
                  cursor pointer
                  line-height 18px
                  user-select none
                  &::before
                    content ''
                    position absolute
                    display block
                    left -4px
                    right -4px
                    top 0
                    height 45px
                    background url(//static.smartisanos.cn/index/assets/images/updown-select-icon.ce7e0ffb6ed63599a7537ee7ca06827c.png) no-repeat
                    background-size 100% auto
                    background-position 0 0
        .sku-custom-tips-wrapper
          margin 0
          padding 25px 0
          border-bottom 1px solid rgba(0,0,0,.08)
          .sku-custom-tips
            position relative
            display flex
            .sku-custom-tips-title
              width 85px
              height 28px
              line-height 28px
              color #666
              font-size 14px
              float left
            .sku-custom-tips-text
              position relative
              top 5px
              width 472px
              & p
                position relative
                padding-bottom 10px
                padding-left 10px
                line-height 1.5
                color #999
                font-size 12px
              & ::before
                content '*'
                top 2px
                margin auto
                position absolute
                left 0
                font-size 14px
</style>
