<template>
  <div id="app">
    <home-header></home-header>
    <router-view/>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '@/pages/home/components/header'
import homeFooter from '@/pages/home/components/footer'
export default {
  name: 'App',
  components: {
    homeHeader,
    homeFooter,
  }
}
</script>

<style lang="stylus" scoped>

</style>
