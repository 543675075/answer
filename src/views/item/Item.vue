<template>
  <div class='item'>
    <common></common>
  </div>
</template>



<script>
  import Common from 'components/Common'
  import {ALL_TIME} from '../../store/mutations_type.js'
  export default {
    name: 'Item',
    components: {
      Common
    },
    data() {
      return {

      };
    },
    created() {
      // 开启计时器
      this.$store.commit(ALL_TIME)
    },
  }
</script>
<style lang='less' scoped>
  .item{
    width: 100%;
    height: 100%;
  }
</style>