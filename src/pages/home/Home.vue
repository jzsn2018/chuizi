<template>
<div class="home">
  <header-nav></header-nav>
  <header-bottom></header-bottom>
  <production-item></production-item>
  <bottom-notice></bottom-notice>
  <home-footer></home-footer>
  <home-mask></home-mask>
</div>
</template>

<script>
import headerNav from './components/header'
import headerBottom from './components/headerBottom'
import productionItem from './components/productionItem'
import bottomNotice from './components/bottom'
import homeFooter from './components/footer'
import homeMask from './components/prompt'
export default {
  name: 'Home',
  components: {
    headerNav,
    headerBottom,
    productionItem,
    bottomNotice,
    homeFooter,
    homeMask
  }
}
</script>

<style lang='stylus' scoped>

</style>
