<template>
    <Row class="banner" type="flex" justify="center" align="middle">
        <h1><slot></slot></h1>
    </Row>
</template>
<script>
    export default {
        name: 'Banner'
    }
</script>
<style scoped>
  .banner{
    height: 210px;
    background: #333;
    color: #fff;
  }

  h1{
    font-size: 72px;
  }

  p{
    font-size: 24px;
  }

  @media (max-width: 400px) {
    h1{font-size: 42px;}
  }
</style>
