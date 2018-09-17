<template>
  <div>
    <home-header></home-header>
    <header-bottom></header-bottom>
    <item-warper></item-warper>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '../home/components/header'
import headerBottom from '../home/components/headerBottom'
import itemWarper from './components/itemWarper'
import homeFooter from '../home/components/footer'
export default {
  name: 'goodDetail',
  props: [''],
  components: {
    homeHeader,
    headerBottom,
    itemWarper,
    homeFooter
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
