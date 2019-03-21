<template>
    <div>
      <img :width="width" src="@/assets/img/LOGO_SMALL.png"/>
    </div>
</template>
<script>
  export default {
    props:{
      width: {
        type: Number,
        default: 50
      }
    }
  }
</script>
<style scoped>
  img{
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
</style>
