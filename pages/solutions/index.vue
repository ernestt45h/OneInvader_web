<template>
  <div>
    <Banner>
      Services
    </Banner>
    <Col :xs="24">
      <info-card
        title="Custom Software Development Services">
        OneInvader provides full-cycle software development services designed to help you grow your
        business,
        increase your ROI, and one-up the competition. Whether it’s custom software engineering,
        software testing and quality assurance, system integration, technology consulting,
        or software support — we got you covered.
      </info-card>
      <info-card
        color="rgba(0,0,0,.15)"
        title="Full Range of Software Engineering Services">
        <Row type="flex" justify="space-around" align="middle">
          <Col v-for="(service, index) in services" :key="index" :xs="24" :md="16" :lg="7">
            <service-pallete
              :icon="service.icon"
              :title="service.title"
              :desc="service.desc"
            />
          </Col>
        </Row>
      </info-card>
      <info-card
      color="#fff"
      title="Let’s Get Started!"
      >
        <p>We offer a powerful combination of profound tech expertise, mature, low-risk processes, and proven experience in a variety of business domains to turn your business idea into reality. Please contact us, and an expert will get back to you ASAP with a free, no-obligation quote.</p>
        <Divider>
          <Button size="large" to="/free-quote" type="primary">Get a Free Quote</Button>
        </Divider>
      </info-card>
    </Col>
  </div>
</template>

<script>
  import Banner from "../../components/navigation/Banner";
  import InfoCard from "../../components/InfoCard";
  import ServicePallete from "../../components/ServicePallete";

  export default {
      name: "solutions.vue",
      components: {ServicePallete, InfoCard, Banner},
      head () {
          return {
            title: 'OneInvader Services',
            meta: [
              // hid is used as unique identifier. Do not use `vmid` for it as it will not work
              { hid: 'description', name: 'description', content: 'OneInvader client services' }
            ]
          }
        },
      data(){
        return {
          services:[
            {
              icon: 'ios-desktop-outline',
              title: 'Custom Software Development',
              desc: 'Whether you are a start-up or an established business, we are ready to assist you at\n' +
                '          every stage of the software development life cycle — from conceptualization and consulting\n' +
                '          to development and support.'
            },
            {
              desc: 'Develop powerful, highly usable mobile apps that solve business problems, attract users, and reinforce your brand. We build native, hybrid, and cross-platform apps that run on all major operating systems such as iOS and Android.',
              title: 'Mobile Application Development',
              icon: 'ios-phone-portrait'
            },
            {
              icon: 'ios-globe-outline',
              title: 'Web Application Development',
              desc: 'Our software engineers have a wealth of experience in building web applications. We are also experts in many verticals and business domains, including e-Commerce, e-Learning, AdTech, Finance, Entertainment, and more.'
            },
            {
              icon: "ios-bug-outline",
              title: "Software Testing and QA",
              desc: 'Hire our testing and QA professionals to ensure the highest level of quality. We provide standalone testing services via dedicated QA teams with the right expertise to meet specific project needs.'
            },
            {
              icon: 'ios-git-compare',
              title: 'QA Automation Service',
              desc: 'Utilize our test automation services to release faster without sacrificing quality. Leverage our in-house automation framework to quickly test functionality, APIs, or mobile apps with unparalleled robustness and speed.'
            },
            {
              icon: 'ios-people',
              title: 'Dedicated Development Center',
              desc: 'Use our dedicated development teams to rapidly scale up or down your development resources, cut the development costs, and reduce time to market. We have a solid process in place to ensure total visibility and control.'
            }
          ]
        }
      }
    }
</script>
<style scoped>


  p{
    margin-top: 20px;
  }
</style>

