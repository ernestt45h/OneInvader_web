<template>
  <div>
    <Dropdown trigger="click">
      <Button size="large" icon="md-arrow-dropdown" type="text">Services</Button>
      <DropdownMenu  slot="list">
        <DropdownItem><Button type="warning" size="large" icon="ios-brush" long>Web Design</Button></DropdownItem>
        <DropdownItem><Button type="info" size="large" icon="md-planet" long>Web Development</Button></DropdownItem>
        <DropdownItem><Button type="info" size="large" icon="md-code" long>Software Development</Button></DropdownItem>
        <DropdownItem><Button type="info" size="large" icon="md-phone-portrait" long>App Development</Button></DropdownItem>
        <DropdownItem><Button type="error" size="large" icon="ios-analytics" long>Logo & Branding</Button></DropdownItem>
        <DropdownItem><Button type="success" size="large" icon="ios-chatbubbles" long>Consultation</Button></DropdownItem>
        <Divider></Divider>
        <DropdownItem><Button type="text" size="large" icon="md-list" long>View All Services</Button></DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="click">
      <Button size="large" icon="md-arrow-dropdown" type="text">Products</Button>
      <DropdownMenu  slot="list">
        <DropdownItem>
          <Button type="text" size="large" long>
            <Avatar src="/onecare_logo.png"/>
            OneCare Plus
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Button size="large" type="text">Blog</Button>
    <Button size="large" type="text">About</Button>
    <Button size="large" type="text">Contact</Button>
    <Divider type="vertical"/>
    <Button size="large" type="text">Login</Button>
    <Button size="large" type="text">
      <Row type="flex" align="middle">
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"/>
        &nbsp; Sign Up
      </Row>
    </Button>
  </div>
</template>

<script>
    export default {
        name: "NavLinks"
    }
</script>

<style scoped>

</style>
