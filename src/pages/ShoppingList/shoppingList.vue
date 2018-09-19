<template>
  <div>
    <header-bottom></header-bottom>
    <cart></cart>
  </div>
</template>

<script>
import headerBottom from '@/pages/home/components/headerBottom'
import cart from './components/cart'
export default {
  name: '',
  props: [''],
  components: {
    cart,
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
