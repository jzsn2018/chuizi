<template>
<div class="production">
  <div class="container">
    <div class="header-nav">
      <ul class="header-nav-ul">
        <li class="header-nav-item-active">综合排序</li>
        <li>销量排序</li>
        <li>价格低到高</li>
        <li>价格高到低</li>
      </ul>
    </div>
    <div class="item-wraper">
      <shop-item v-for="item of goodData" :key='item.id' :item='item'></shop-item>
    </div>
  </div>
</div>
</template>

<script>
import goodData from '@/lib/newGoodsData'
import shopItem from './shopItem'
export default {
  name: 'productionItem',
  props: [''],
  components: {
    shopItem
  },
  data () {
    return {
      img: [
        'https://resource.smartisan.com/resource/6eea1eac0bfaeedfb85b9c6285857106.jpg?x-oss-process=image/resize,w_20',
        'https://resource.smartisan.com/resource/cb881fc7b22a0f4d5acfc181c9307ede.jpg?x-oss-process=image/resize,w_20',
        'https://resource.smartisan.com/resource/abd844df948cbc5f2bf78ea36be785a1.jpg?x-oss-process=image/resize,w_20'
      ],
      goodData
    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.production
  background rgb(237,237,237)
  .container
    width 1220px
    margin 0 auto
    overflow hidden
    .header-nav-ul
      height 60px
    .header-nav-ul > li
      float left
      padding-left 42px
      font-size 12px
      line-height 60px
      position relative
      color #999
    .header-nav-ul > li:hover
      color #5079d9
      cursor pointer
    .header-nav-ul > li:before
      content " "
      display block
      position absolute
      left 20px
      top 50%
      width 2px
      height 2px
      margin-top -1px
      background #c7c7c7
    .header-nav-ul > li:first-child
      padding-left 0px
    .header-nav-item-active
      color #5079d9 !important
    .item-wraper
      background #fff
      width 100%
      border-radius 8px
      border 1px solid #dcdcdc
      border-color rgba(0,0,0,.14)
      box-shadow 0 3px 8px -6px rgba(0,0,0,.1)
      float left
      box-sizing border-box
</style>
