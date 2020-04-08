<template>
  <div class='item'>
    <common></common>
  </div>
</template>



<script>
  import Common from 'components/Common'
  export default {
    name: 'Item',
    components: {
      Common
    },
    data() {
      return {

      };
    },

  }
</script>
<style lang='less' scoped>
  .item{
    width: 100%;
    height: 100%;
  }
</style>