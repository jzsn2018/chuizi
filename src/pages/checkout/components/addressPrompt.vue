<template>
<div class="mask"  onselectstart="return false" v-show='visiblity'>
  <div class="container ng-trigger ng-trigger-animationState" style="opacity: 1;display: flex;">
    <div class="dialog ng-tns-c10-4" style="width: 306px;">
      <div class="topbar ng-tns-c10-4">
        <div class="title clearfix">
          <h4 class="ng-tns-c10-4">管理收货地址</h4>
        </div>
      </div>
      <div class="content">
          <div  class="dialog-address-from">
              <div  class="address-form fn-clear">
                <form class="ng-untouched ng-pristine ng-invalid">
                  <div class="module-form-row-pc fn-clear">
                    <div  class="form-item-v3">
                      <i>收货人姓名</i>
                      <input  ifocus="" type="text" class="ng-untouched ng-pristine ng-invalid">
                      <div class="alert alert-danger" style="display:none"> 必填 </div>
                    </div>
                  </div>
                  <div  class="module-form-row-pc fn-clear">
                    <div  class="form-item-v3">
                      <i >手机号</i>
                      <input  ifocus="" type="text" class="ng-untouched ng-pristine ng-invalid">
                      <div  class="alert alert-danger" style="display:none"> 手机号格式错误 </div>
                    </div>
                  </div>
                  <div  class="module-form-row-pc fn-clear">
                    <div  class="form-item-v3"> <i >区号（可选）</i>
                    <input ifocus="" type="text" class="ng-untouched ng-pristine ng-valid">
                    </div>
                  </div>
                  <div  class="module-form-row-pc fn-clear">
                    <div  class="form-item-v3">
                      <i >固定电话（可选）</i> <input ifocus="" type="text" class="ng-untouched ng-pristine ng-valid">
                    </div>
                  </div>
                  <div  class="module-form-row-pc fn-clear">
                    <div  class="form-item-v3 province-wrapper">
                        <div  class="select-province-wrapper">
                          <select  class="select-province">
                            <option  value="0" label="请选择省份">请选择省份 </option>
                            <option  value="110000" label="北京市">北京市 </option>
                            <option  value="120000" label="天津市">天津市 </option>
                            <option  value="130000" label="河北省">河北省 </option>
                            <option  value="140000" label="山西省">山西省 </option>
                            <option  value="150000" label="内蒙古自治区">内蒙古自治区 </option>
                            <option  value="210000" label="辽宁省">辽宁省 </option>
                            <option  value="220000" label="吉林省">吉林省 </option>
                            <option  value="230000" label="黑龙江省">黑龙江省 </option>
                            <option  value="310000" label="上海市">上海市 </option>
                            <option  value="320000" label="江苏省">江苏省 </option>
                            <option  value="330000" label="浙江省">浙江省 </option>
                            <option  value="340000" label="安徽省">安徽省 </option>
                            <option  value="350000" label="福建省">福建省 </option>
                            <option  value="360000" label="江西省">江西省 </option>
                            <option  value="370000" label="山东省">山东省 </option>
                            <option  value="410000" label="河南省">河南省 </option>
                            <option  value="420000" label="湖北省">湖北省 </option>
                            <option  value="430000" label="湖南省">湖南省 </option>
                            <option  value="440000" label="广东省">广东省 </option>
                            <option  value="450000" label="广西壮族自治区">广西壮族自治区 </option>
                            <option  value="460000" label="海南省">海南省 </option>
                            <option  value="500000" label="重庆市">重庆市 </option>
                            <option  value="510000" label="四川省">四川省 </option>
                            <option  value="520000" label="贵州省">贵州省 </option>
                            <option  value="530000" label="云南省">云南省 </option>
                            <option  value="540000" label="西藏自治区">西藏自治区 </option>
                            <option  value="610000" label="陕西省">陕西省 </option>
                            <option  value="620000" label="甘肃省">甘肃省 </option>
                            <option  value="630000" label="青海省">青海省 </option>
                            <option  value="640000" label="宁夏回族自治区">宁夏回族自治区 </option>
                            <option  value="650000" label="新疆维吾尔自治区">新疆维吾尔自治区 </option>
                          </select>
                        </div>
                      </div>
                  </div>
                  <div  class="module-form-row-pc fn-clear">
                    <div  class="form-item-v3 city-wrapper fl">
                        <div class="select-city-wrapper">
                          <select class="select-city" id="js-select-city">
                            <option value="0" label="请选择城市">请选择城市 </option>
                          </select>
                        </div>
                    </div>
                  </div>
                    <div class="form-item-v3 district-wrapper fr">
                      <div class="ng-untouched ng-pristine ng-invalid">
                        <div class="select-district-wrapper">
                          <select class="select-district" id="js-select-district">
                            <option value="0" label="请选择区县">请选择区县 </option>
                            <option value="999999" label="其他">其他 </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  <div  class="module-form-row-pc fn-clear">
                    <div  class="form-item-v3">
                      <i >街道编号/名称，楼宇名称</i>
                      <input  ifocus="" type="text" class="ng-untouched ng-pristine ng-invalid">
                      <div  class="alert alert-danger" style="display:none"> 必填 </div>
                    </div>
                  </div>
                  <div class="module-form-row-pc default-address fn-clear">
                    <div class="checkbox-section">
                      <span class="blue-checkbox"></span>
                      <span class="checkbox-label">设为默认地址</span>
                    </div>
                  </div>
                  <div  class="footer">
                    <button class="cancel">取消</button>
                    <button class="btn btn-disabled" @click='HandleClick'>保存</button>
                  </div>
                </form>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'addressPrompt',
  props: ['info'],
  data () {
    return {
      visiblity: false,
      addInfo:{
        name: '',
        phone: '',
        areaCode: '',
        landLine: '',
        provinceId: '',
        province: '',
        cityId: '',
        city: '',
        countyId: '',
        county: '',
        add: '',
        default: false
      }
    }
  },
  methods: {
    HandleClick (e) {
      this.visiblity = !this.visiblity
    }
  }
}
</script>
<style lang='stylus' scoped>
  select
    cursor pointer
    border none
    outline none
    width 100%
    height 32px
    display inline-block
    background #fff linear-gradient(#fafafa,#f5f5f5)
    border-radius 4px
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
    cursor pointer
    .container
      position relative
      width 100%
      height 100%
      .dialog
        background #fff
        box-sizing border-box
        overflow-y hidden
        overflow-x hidden
        min-width 200px
        border-radius 9px
        text-align left
        box-shadow 0 10px 30px rgba(0,0,0,.25)
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
        height 580px
        z-index 9999
        .topbar
          overflow hidden
          width 100%
          background-image linear-gradient(#fbfbfb,#ececec)
          .title
            height 47px
            padding 0 15px
            border-radius 12px 12px 0 0
            border-bottom 1px solid #e6e6e6
            box-shadow 0 1px 7px rgba(0,0,0,.06)
            background linear-gradient(#fbfbfb,#ececec)
            line-height 71px
            text-align center
            & h4
              font-size 18px
              font-weight 700
              color #646464
              line-height 47px
            .clearfix::after
              visibility hidden
              display block
              font-size 0
              content ''
              height 0
              clear both
        .content
          padding 18px 18px 18px 20px
          box-sizing border-box
          line-height 24px
          color #666
          overflow hidden
          min-width 220px
          .dialog-address-from
            width 285px
            .address-form
              width 265px
            .fn-clear
              zoom 1
              .fn-clear::after
                visibility hidden
                display block
                font-size 0
                content ''
                height 0
                clear both
              .module-form-row-pc
                position relative
                padding-bottom 10px
                margin 0 auto
                .form-item-v3
                  position relative
                  height 30px
                  background #fff
                  border 1px solid #ccc
                  border-radius 6px
                  box-shadow inset 0 3px 5px -4px rgba(0,0,0,.4), inset -1px 0 3px -2px rgba(0,0,0,.1)
                  line-height 32px
                  font-size 14px
                  & i
                    position absolute
                    left 15px
                    top 0
                    font-size 14px
                    font-weight 700
                    pointer-events none
                    color rgba(0,0,0,.2)
                  & input
                    width 100%
                    height 100%
                    box-sizing border-box
                    padding 5px 15px
                    background-color transparent
                    border none
                    font-size 14px
                    z-index 10
                    outline none
                .module-form-row-pc
                  position relative
                  padding-bottom 10px
                  margin 0 auto
                  .form-item-v3
                    position relative
                    height 30px
                    background #fff
                    border 1px solid #ccc
                    border-radius 6px
                    box-shadow inset 0 3px 5px -4px rgba(0,0,0,.4), inset -1px 0 3px -2px rgba(0,0,0,.1)
                    line-height 32px
                    font-size 14px
                    & .select-province-wrapper
                      display block
                      background #fff linear-gradient(#fafafa,#f5f5f5)
                      position relative
                      height 100%
                      border-radius 5px
                      overflow hidden
                      .select-province
                        display block
                        background #fff linear-gradient(#fafafa,#f5f5f5)
                        position absolute
                        top 50%
                        transform translateY(-50%)
                        width 100%
                        margin 0
                        padding 0 15px
                        font-size 14px
                        font-weight 700
                        color #666
                        -webkit-padding-start 15px
                .module-form-row-pc
                  .city-wrapper
                    width 126px
                    position relative
                    height 30px
                    background #fff
                    border 1px solid #ccc
                    border-radius 6px
                    box-shadow inset 0 3px 5px -4px rgba(0,0,0,.4), inset -1px 0 3px -2px rgba(0,0,0,.1)
                    line-height 32px
                    font-size 14px
                  .f1
                    float left !important
              .module-form-row-pc
              .default-address
                margin 11px 0 10px
                .checkbox-section
                  font-size 14px
                  line-height 14px
                  cursor pointer
                .checkbox-section .blue-checkbox, .checkbox-section .blue-checkbox-on
                  display inline-block
                  position relative
                  width 19px
                  height 19px
                  user-select none
                  .checkbox-label
                    color #686868
                    vertical-align super
                  .blue-checkbox
                  &::before
                    position absolute
                    content ''
                    top 0
                    left 0
                    width 1rem
                    height 1rem
                    border .12rem solid #d3d3d3
                    border-radius 50%
              .footer
                position relative
                margin 0 -20px
                margin-bottom -18px
                padding-top 9px
                padding-left 7px
                background #f5f5f5
                width 305px
                height 50px
                border-top 1px solid #e9e9e9
                border-radius 0 0 6px 6px
                box-sizing border-box
                .cancel
                  border-radius 6px
                  height 30px
                  font-size 12px
                  color #646464
                  background-image linear-gradient(#f8f8f8,#f2f2f2)
                  border 1px solid #d7d7d7
                  width 140px
                  cursor pointer
                  border-radius 4px
                .btn
                  display inline-block
                  margin-left 3px
                  width 140px
                  height 30px
                  font-size 12px
                  background-image linear-gradient(#6e98f4,#4b77ee)
                  border 1px solid #6586e4
                  color #fff
                  border-radius 4px
                .btn-disabled
                  pointer-events none
                  cursor not-allowed
                  opacity .4

</style>
