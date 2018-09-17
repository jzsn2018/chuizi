<template>
  <div>
    <home-header></home-header>
    <header-bottom></header-bottom>
    <cart></cart>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '@/pages/home/components/header'
import homeFooter from '@/pages/home/components/footer'
import headerBottom from '@/pages/home/components/headerBottom'
import cart from './components/cart'
export default {
  name: '',
  props: [''],
  components: {
    homeHeader,
    cart,
    homeFooter,
    headerBottom
  },
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
</style>
