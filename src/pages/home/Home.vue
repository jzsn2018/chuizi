<template>
<div class="home">
  <header-bottom></header-bottom>
  <production-item></production-item>
  <bottom-notice></bottom-notice>
  <home-mask></home-mask>
</div>
</template>

<script>
import headerBottom from './components/headerBottom'
import productionItem from './components/productionItem'
import bottomNotice from './components/bottom'
import homeMask from './components/prompt'
export default {
  name: 'Home',
  components: {
    headerBottom,
    productionItem,
    bottomNotice,
    homeMask
  }
}
</script>

<style lang='stylus' scoped>

</style>
