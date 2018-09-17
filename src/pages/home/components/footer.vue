<template>
  <div class="footer">
    <div class="content">
      <div class="siteinfo">
        <ul class="nav-footer">
          <li class="nav-footer-li">
            <h3>订单服务</h3>
            <ul>
              <li class="nav-footer-item">购买指南</li>
              <li class="nav-footer-item">支付方式</li>
              <li class="nav-footer-item">送货政策</li>
            </ul>
          </li>
           <li class="nav-footer-li">
            <h3>服务支持</h3>
            <ul>
              <li class="nav-footer-item">售后服务</li>
              <li class="nav-footer-item">维修门店</li>
              <li class="nav-footer-item">零售门店</li>
            </ul>
          </li> <li class="nav-footer-li">
            <h3>自助服务</h3>
            <ul>
              <li class="nav-footer-item">热点咨询</li>
              <li class="nav-footer-item">预约购买</li>
              <li class="nav-footer-item">订单物流</li>
            </ul>
          </li> <li class="nav-footer-li">
            <h3>媒体中心</h3>
            <ul>
              <li class="nav-footer-item">新闻动态</li>
              <li class="nav-footer-item">官方视频</li>
              <li class="nav-footer-item">图片资源</li>
            </ul>
          </li> <li class="nav-footer-li">
            <h3>关于公司</h3>
            <ul>
              <li class="nav-footer-item">公司简介</li>
              <li class="nav-footer-item">加入我们</li>
              <li class="nav-footer-item">荣誉奖项</li>
            </ul>
          </li>
        </ul>
        <ul class="service">
          <li class="tel">400 - 626 - 5666</li>
          <li class="time">周一到周日 9:00 - 18:00</li>
          <li class="desc">(仅收市话费)</li>
          <li class="help"><span>在线帮助</span></li>
        </ul>
      </div>
      <div class="copyright">
          <h4>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</h4>
        <h5>北京锤子数码科技有限公司</h5>
        <ul>
          <li>法律声明</li>
          <li>隐私条款</li>
          <li>开发者中心</li>
        </ul>
        <h6>
          <span>京 ICP 备 14041720 号 - 1</span>
          <span>京 ICP 证 140622 号</span>
          <span>京公网安备 11010502025474</span>
          <span>网络文化经营许可证京网文 (2016) 2284 - 266 号</span>
        </h6>
        <h3>中文</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homeFooter',
  props: [''],
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
  .footer
    background #fafafa
    border-top 1px solid #e6e6e6
    display block
    .content
      width 1220px
      margin 0 auto
      .siteinfo
        height 108px
        padding 60px 0 55px
        border-bottom 1px solid #e6e6e6
        position relative
        .nav-footer-li
          margin-right 90px
          float left
          line-height 1
        .nav-footer-li h3
          color #646464
          font-weight 700
          font-size 12px
          padding 0 0 20px
        .nav-footer-item
          color #969696
          font-size 12px
          padding 7px 0
      .service
        position absolute
        right 0
        text-align right
        .tel
          font-size 18px
          font-weight 900
          line-height 1
          color #5079d9
        .time
        .desc
          margin-top 15px
          font-family PingFang SC
          width 241px
          line-height 1
          color #999
          font-size 12px
        .desc
          margin-top 5px !important
        .help
          float right
          width 132px
          height 30px
          line-height 30px
          background linear-gradient(#fcfcfc,#f5f5f5)
          cursor pointer
          font-size 12px
          font-weight 700
          text-align center
          color #5079d9
          border 1px solid #d0d0d0
          border-radius 5px
          box-sizing border-box
          margin-top 15px
      .copyright
        color #434d55
        font-size 12px
        padding 30px 0 60px
        position relative
      .copyright h4
      .copyright h5
        height 15px
        line-height 15px
        color #bdbdbd
        display inline-block
      .copyright h5
        margin-left 5px
      .copyright ul
        margin 0 0 0 12px
        width 220px
        box-sizing border-box
        display inline-block
      .copyright ul li
        float left
        line-height 8px
        padding 1px 10px 0
        border-left 1px solid #ccc
        color #ababab
        cursor pointer
      .copyright ul li:hover
        color #5079d9
      .copyright h6
        padding 10px 0 0
        height 15px
        font-size 0
      .copyright h6 span
        margin-right 20px
        color #bdbdbd
        font-size 12px
      .copyright h3
        position absolute
        right 0
        top 30px
      .copyright h3::before
        position absolute
        content ''
        width 16px
        height 15px
        left -30px
        top -2px
        background url(//static.smartisanos.cn/index/assets/images/flag.afd0e7c69a7b9639cbfe7dde4ec0f3b0.png) 0 0 no-repeat
        background-size 16px 80px
</style>
