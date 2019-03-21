<template>
    <Card class="service-pallete">
        <span class="icon" >
          <Icon :type="icon"></Icon>
        </span>
        <h4>{{title}}</h4>
        <p>{{desc}}</p>
    </Card>
</template>
<script>
    export default {
        name: 'service-pallete',
        props:['icon', 'title', 'desc']
    }
</script>
<style scoped>

  .service-pallete{
    margin-bottom: 20px;
  }

  .icon{
    font-size: 72px;
    color: #fbb217;
  }
  
  h3{
  }

  p {
      margin-top: 20px;
      font-size: 18px;
  }
</style>
