<template>
  <div>
    <header-bottom></header-bottom>
    <item-warper></item-warper>
  </div>
</template>

<script>
import headerBottom from '../home/components/headerBottom'
import itemWarper from './components/itemWarper'
export default {
  name: 'goodDetail',
  props: [''],
  components: {
    headerBottom,
    itemWarper
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
