<template>
    <div id="navbar" :style="navBackground">
      <Row class="container" type="flex" align="middle" justify="space-between">
          <nuxt-link to="/">
              <Row type="flex" align="middle" >
                  <logo class="logo"/>
                  <h3>&nbsp; OneInvader</h3>
              </Row>
          </nuxt-link>
          <Button @click="isNavOpen = !isNavOpen" icon="md-menu" shape="circle" type="warning" class="menu-btn"></Button>
          <div class="menu" :class="{active: isNavOpen}">
              <Dropdown trigger="click">
                <Button size="large" icon="md-arrow-dropdown" type="text">Services</Button>
                <DropdownMenu  slot="list">
                  <!--<DropdownItem><Button type="info" size="large" icon="md-planet" long>Web Application Development</Button></DropdownItem>-->
                  <!--<DropdownItem><Button type="info" size="large" icon="md-code" long>Custom Software Development</Button></DropdownItem>-->
                  <!--<DropdownItem><Button type="info" size="large" icon="md-phone-portrait" long>Mobile Application Development</Button></DropdownItem>-->
                  <!--<DropdownItem><Button type="warning" size="large" icon="md-code-working" long>Software Testing & QA</Button></DropdownItem>-->
                  <!--<DropdownItem><Button type="warning" size="large" icon="ios-people" long>Dedicated Development Center</Button></DropdownItem>-->
                  <!--<DropdownItem><Button type="error" size="large" icon="ios-analytics" long>Logo & Branding</Button></DropdownItem>-->
                  <!--<DropdownItem><Button type="success" size="large" icon="ios-chatbubbles" long>Consultation</Button></DropdownItem>-->
                  <!--<Divider></Divider>-->
                  <DropdownItem><Button type="text" size="large" icon="md-list" to="/solutions" long>View All Services</Button></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <!--<Dropdown trigger="click">-->
                <!--<Button size="large" icon="md-arrow-dropdown" type="text">Products</Button>-->
                <!--<DropdownMenu  slot="list">-->
                  <!--<DropdownItem>-->
                    <!--<Button type="text" size="large" long>-->
                      <!--<Avatar class="google-logo" src="/onecare_logo.png"/>-->
                      <!--OneCare Plus-->
                    <!--</Button>-->
                  <!--</DropdownItem>-->
                <!--</DropdownMenu>-->
              <!--</Dropdown>-->
              <!--<Button size="large" type="text">Blog</Button>-->
              <!--<Button size="large" type="text">About</Button>-->
              <!--<Button size="large" type="text">Contact</Button>-->
              <!--<Divider class="menu" type="vertical"/>-->
              <!--<Divider class="menu-btn"/>-->
              <!--<Button size="large" type="text">Login</Button>-->
              <!--<Button size="large" type="text">-->
                  <!--<Avatar class="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"/>-->
                  <!--&nbsp; Sign Up-->
              <!--</Button>-->

          </div>
      </Row>
    </div>
</template>

<script>
    import Logo from '@/components/logo'
    export default {
        components:{Logo},
        name: "AppNavbar",
        
        data(){
          return {
            isNavOpen: false,
            scrollHeight: 0
          }
        },
        created() {
          if(process.browser){
            window.addEventListener('scroll', e=>{
              this.scrollHeight = window.scrollY
            })
          }
        },
        computed:{
          navBackground(){
            return this.scrollHeight >= 5 ? {background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,.25)'} : {}
          }
        },
    }
</script>

<style scoped>
  #navbar{
    position: fixed;
    width: 100vw;
    /*background: #fff;*/
    height: 50px;
    /*box-shadow: 0px 5px 10px rgba(0, 0, 0, .072);*/
    transition: all .2s;

  }

  h3{
    color: #515a6e;
  }

  .logo{
    width: 45px;
  }

  @media (max-width: 768px){
    .menu{
      height: 0;
      overflow: hidden;
    }

    .active{
      height: 100%;
      margin-top: 5px;
      background: #fff;
      transition: all .2s;
    }

    .active *{
      text-align: start;
      width: 100%;
    }

    .google-logo{
      width: 35px;
      height: 35px;
    }
  }

  @media (min-width: 768px) {
    .menu-btn{
      display: none;
    }
  }
</style>
