let aws = require('./aws.module');

module.exports = class EmailModule {
  constructor(){
    this.ses = new aws.SES({apiVersion: 'latest'});
  }

  async sendMail(source, addresses, subject, html){
    this.ses.sendEmail({
      Source: source,
      Destination: {
        ToAddresses: addresses
      },
      Message: {
        Subject: {
          Data: subject
        },
        Body: {
          Html: {
            Data: html
          }
        }
      }
    }, (err, data)=>{
      if (err)throw err;
      return data
    })
  }

  async sendTest(){
    return this.sendMail(
      'no-reply@oneinvader.com',
      ['ernest.hayford@bluecrest.edu.gh'],
      'This is a test mail',
      '<h1>Email is working alright!!!</h1>'
      )
  }
}
