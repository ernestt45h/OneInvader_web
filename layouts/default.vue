<template>
  <div>
    <!-- End Google Tag Manager (noscript) -->
    <vue-particles
      id="particles-js"
      lines-color="#fbb217"
      :particle-size="10"
      color="#fbb217"
      :particles-number="80"
      class="background" />
    <app-navbar class="fixed-top"/>
    <transition
      name="fade"
    >
      <nuxt id="app"/>
    </transition>
    <app-footer/>
  </div>
</template>
<script>
  import AppNavbar from '@/components/navigation/AppNavbar'
  import AppFooter from '@/components/footer'

  export default {
    components:{AppNavbar, AppFooter},
    data(){
      return{
        themeMode: 'light'
      }
    },
    created() {
      if(process.browser){
        let time = new Date().getHours()
        this.themeMode = (time >= 18) || (time < 6) ? 'dark' : 'light'
      }

      this.$Notice.config({
        top: 72,
        duration: 5
      })


      this.$Message.config({
        top: 60,
        duration: 5
      })

    }
  }
</script>
<style>
  /**{*/
    /*color: #fff;*/
  /*}*/

  #app{
    margin-top: 50px;
    width: 100vw;
    height: calc(100vh - 50px) ;
    -webkit-background-size: contain;
    background-size: contain;
  }

  .bg-orange{
    background: #fbb217;
  }

  .dark{
    background: #000;
  }

  .light{
    background: #fff;
  }
  .background {
    position: fixed;
    display: block;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
  }

  .content{
    height: calc(100vh - 50px);
    background: #fff;
  }
</style>
