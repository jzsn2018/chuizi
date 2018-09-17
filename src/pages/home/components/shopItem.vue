<template>
<div class="item">
    <div class="item-mask" @mouseenter='handleMouseenter' @mouseleave='handleMouseleave' @click.stop='toDetail(item)'>
      <div class="changeBlock">
        <router-link :to="{name: 'goodDetail',query: {id:item.sku_info[itemIndex].sku_id}}" class="item-info" tag="span">
          查看详情
        </router-link>
        <span class="item-shopcar" @click.stop='addCarPanelHandle(item.sku_info[itemIndex])'>加入购物车</span>
      </div>
    </div>
    <img :src="item.sku_info[itemIndex].ali_image" class="item-img">
    <h4 class="item-h4">{{item.name}}</h4>
    <h6 class="item-h6">{{item.name_title}}</h6>
    <div class="toggle">
      <ul class="toggle-ul">
        <li class="toggle-li" v-for='(sku,index) of item.sku_info' :key='sku.sku_id' @click.stop='choiceItem(index)'>
          <div class="toggle-div"  :class="{'active' : index == itemIndex}"><img :src="sku.spec_json.image" alt="" class="toggle-img"></div>
        </li>
      </ul>
    </div>
    <div class="price">
      <span class="price-title">￥{{item.sku_info[itemIndex].price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopItem',
  props: ['item'],
  data () {
    return {
      itemIndex: 0
    }
  },
  methods: {
    handleMouseenter (e) {
      console.log(111)
      e.target.classList.add('item-mask-class')
      e.srcElement.lastChild.classList.remove('changeBlock')
      e.srcElement.parentNode.lastChild.classList.add('changePrice')
    },
    handleMouseleave (e) {
      e.target.classList.remove('item-mask-class')
      e.srcElement.lastChild.classList.add('changeBlock')
      e.srcElement.parentNode.lastChild.classList.remove('changePrice')
    },
    choiceItem (index) {
      this.itemIndex = index
      console.log(index)
    },
    addCarPanelHandle (data) {
      this.$store.commit('addCarPanelData', data)
      this.$store.commit('changeshowtrue')
    },
    toDetail (item) {
      console.log(22)
      this.$router.push({name: 'goodDetail', query: {id: item.sku_info[this.itemIndex].sku_id}})
    }
  }
}
</script>
<style lang='stylus' scoped>
.item :hover
  cursor pointer
.item
  position relative
  float left
  width 25%
  height 429px
  background #ffffff
  text-align center
  border-right 1px solid #efefef
  border-bottom 1px solid #efefef
  border-radius inherit
  box-sizing border-box
  .item-mask
    width 100%
    height 100%
    position absolute
    bottom 0
    left 0
    z-index 999
    .changeBlock
      display none
  .item-mask div
    display inline-block
    width 100%
    height 100%
    line-height 100%
    float left
    position relative
    .item-info
      position absolute
      bottom 25px
      left 30px
      width 110px
      height 30px
      line-height 30px
      background rgb(253,253,253)
      border-radius 6px
      border 1px solid #dcdcdc
      font-size 14px
    .item-shopcar
      position absolute
      bottom 25px
      right 30px
      width 110px
      height 30px
      line-height 30px
      background rgb(83,121,201)
      border-radius 6px
      border 1px solid rgb(83,121,201)
      font-size 14px
      color #fff
  .item-mask-class
    box-shadow inset 10px 10px 50px 1px rgba(0,0,0,.04)
  .item-img
    display block
    width 216px
    margin 0 auto
    padding 45px 0 20px
  .item-h4
    line-height 1.2
    font-size 14px
    color #333
    font-weight 700
    margin 0 8px
  .item-h6
    overflow hidden
    padding-top 15px
    line-height 1.2
    white-space nowrap
    text-overflow ellipsis
    color #999
    font-size 12px
  .toggle
    margin-top 15px
    height 14px
    z-index 1000
    position relative
    .toggle-ul
      height 14px
      display inline-block
      .toggle-li
        float left
        cursor pointer
        margin 0 5px
      .active
        box-shadow inset 0 0 0 .2px #b2b2b2 !important
        border-color #b2b2b2 !important
      .toggle-div
        box-shadow inset 0 0 0 1px #b2b2b2
        border-color #b2b2b2
        border-radius 50%
        width 8px
        height 8px
        border 1px solid #e5e5e5
        border-radius 50%
        padding 2px
      .toggle-img
        width inherit
        height inherit
        border-radius 50%
        display block
  .price
    font-family Arial
    color #d44d44
    font-weight 700
    margin-top 20px
    text-align center
    font-size 0
    .price-title
      font-size 18px
      padding-left 4px
  .changePrice
    display none
</style>
