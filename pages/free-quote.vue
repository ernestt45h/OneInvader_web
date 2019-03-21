<template>
  <div>
    <Banner>
      Planning a Software Project? Let’s Talk!
    </Banner>
    <Col id="free-quote" :xs="24">
      <Card>
        <Row type="flex" justify="center">
          <Col :xs="24" :md="18" :lg="16">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <Row>
                <Col :xs="24" :md="12">
                  <FormItem label="Name" prop="name">
                    <Input v-model="formValidate.name" ></Input>
                  </FormItem>
                  <FormItem label="E-mail" prop="mail">
                    <Input v-model="formValidate.mail"></Input>
                  </FormItem>
                  <FormItem label="phone">
                    <Input v-model="formValidate.phone"></Input>
                  </FormItem>
                  <FormItem label="company">
                    <Input v-model="formValidate.company" ></Input>
                  </FormItem>
                </Col>
                <Col :xs="24" :md="12">
                  <FormItem label="Message" prop="message">
                    <Input v-model="formValidate.message" type="textarea" :autosize="{minRows: 4,maxRows: 5}" ></Input>
                  </FormItem>
                  <!--<FormItem>-->
                    <!--<Checkbox v-model="formValidate.sendNews">Sign me up for news and updates from OneInvader</Checkbox>-->
                  <!--</FormItem>-->
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <div class="g-recaptcha" data-sitekey="6LeNxpgUAAAAACI0C_JJJslHJ_XcE0BUqHCJNad8"></div>
              </Row>
              <Row type="flex" justify="center">
                <Button :loading="loading" type="primary" @click="handleSubmit('formValidate')">Submit</Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </Col>
  </div>
</template>

<script>
    import Banner from "../components/navigation/Banner";
    export default {
      name: "free-quote",
      components: {Banner},
      head(){
        return {
          script: [
            {src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true}
          ]
        }
      },
      data () {
        return {
          loading: false,
          formValidate: {
            name: '',
            mail: '',
            phone: '',
            company: '',
            sendNews: false,
            message: ''
          },
          ruleValidate: {
            name: [
              { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            mail: [
              { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
              { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
            ],

            message: [
              { required: true, message: 'Please message cannot be empty', trigger: 'blur' },
              { type: 'string', min: 20, message: 'Message should not be less than 20 words', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              let token = grecaptcha.getResponse();
              if (token) {
                this.formValidate.token = token;
                this.sendMail()
              }else{
                this.$Message.warning('Verification unsuccessful')
              }
            }else{
              this.$Message.info('Please fill in all required forms')
            }
          })
        },
        sendMail(){
          this.loading = !this.loading
          this.$axios.post('/api/mailer', this.formValidate)
            .then( res=>{
              console.log(res);
              this.loading = !this.loading;
              this.$Notice.success({
                title: 'Email sent',
                message: 'You will be notified on the information provided',
                duration: 5
              });
            }).catch(err=>{
            this.loading = !this.loading
            this.$Notice.error({
              title: 'Email not sent',
              message: 'The was an error trying to send the email',
              duration: 5
            });
          })
        },
        handleReset (name) {
          this.$refs[name].resetFields();
        }
      },
      created() {
        this.$Notice.config({
          top: 72,
          duration: 5
        });
      }
    }
</script>

<style scoped>
</style>
