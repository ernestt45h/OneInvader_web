<template>
    <div id="footer">
      <Col :xs="24">
        <Card style="background: #333">
          <Row type="flex" justify="center" align="middle">
              <a href="https://twitter.com/OneInvader_tech" target="_blank">
                <Icon class="social-icon" type="logo-twitter"></Icon>
              </a>
              <a href="https://facebook.com/OneInvader-231416154191735/?_rdc=1&_rdr" target="_blank">
                <Icon class="social-icon" type="logo-facebook"></Icon>
              </a>
              <a href="https://www.instagram.com/oneinvader_inc/" target="_blank">
                <Icon class="social-icon" type="logo-instagram" />
              </a>
          </Row>
          <Divider>
            <p>&copy;{{copyright}} All rights reserved.</p>
          </Divider>
        </Card>
      </Col>
    </div>
</template>

<script>
    export default {
        name: "index.vue",
        data(){
          return {
            copyright: new Date().getFullYear()
          }
        }
    }
</script>

<style scoped>

  #footer{
    min-height: 100px;
  }

  p{
    color: #fff;
  }
  
  .social-icon{
    color: #fbb217;
    transition: all .3s;
    font-size: 28px;
    margin: 0 5px;
    cursor: pointer;
  }

  .social-icon:hover {
    font-size: 42px;
  }
</style>
