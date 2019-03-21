<template>
  <Row style="min-height: 100%;" type="flex" justify="center" align="middle">
    <Col :xs="24">
      <Row type="flex" justify="center">
        <logo :width="150" class="m-5"/>
      </Row>
      <Row type="flex" justify="center">
        <h1>INVADERS INBOUND</h1>
      </Row>
      <Row type="flex" justify="center">
        <h4>ARE YOU READY?</h4>
      </Row>
    </Col>
    <Col :xs="24">
      <Row type="flex" justify="center">
        <Col :xs="20" :sm="12" :md="8" :lg="6">
          <Row type="flex" >
            <Input size="large" :disabled="true" placeholder="YOUR EMAIL">
              <Button :disabled="true" slot="append">NOTIFY ME</Button>
            </Input>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
</template>
<script>
  import Logo from "../components/logo";
  export default {
    components: {Logo},

  }
</script>
<style scoped>
 h1{
   font-size: 65px;
 }

  @media (max-width: 400px) {
    h1{
      font-size: 32px;
    }
  }
</style>
