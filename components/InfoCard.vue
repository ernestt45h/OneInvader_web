<template>
    <Card class="info-card" :style="{background: color}">
        <Row type="flex" justify="center">
            <Col class-name="info-card" :xs="20" :sm="18" :md="18" :lg="18">
                <h2>{{title}}</h2>
                <p><slot></slot></p>
            </Col>
        </Row>
    </Card>
</template>
<script>
    export default {
        name: 'info-card',
        props:['title', 'color']
    }
</script>
<style scoped>
  .info-card{
    text-align: center;
    padding: 10px 0;
  }

    p {
        margin-top: 40px;
        font-size: 18px;
    }
</style>
