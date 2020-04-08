<template>
  <div class="home" >
    <common path="home"/>
    <img src="~assets/img/1-4.png"  @click="entryItem" class="btn_img">
  </div>
</template>



<script>
  import Common from 'components/Common'
  export default {
    name: 'Home',
    components: {
      Common
    },
    data() {
      return {

      };
    },
    methods: {
      entryItem(){
        this.$router.replace("/item")
      }
    },
  }
</script>
<style lang='less' scoped>
  .home{
    width: 100vw;
    height: 100vh;
  }
  .btn_img{
    position: absolute;
    left: 50%;
    top: 350px;
    width: 30vw;
    transform: translateX(-50%);
  }
  
</style>