let mailRouter = require('express').Router();
let MailModule = require('../modules/Email.module');
const mailer = new MailModule();

mailRouter.post('/', (req, res)=>{
  let mail = req.body;
  console.log(req.body);
  mailer.sendMail(
    'oneinvader_web@oneinvader.com',
    ['oneinvadergh@gmail.com'],
    'OneInvader Service Quota',
    `
    <h4>Name: ${mail.name}</h4>
    <h4>Email: <a href="mailto: ${mail.mail}">${mail.mail}</a></h4>
    <h4>Phone: <a href="tel:${mail.phone}">${mail.phone}</a></h4>
    <h4>Company: ${mail.company}</h4>
    <p>${mail.message}</p>
    `)
    .then((info)=>{
      res.send(info)
    })
    .catch((err)=>{
      console.log(err);
      res.send()
    });
  res.json({status: true});
});

module.exports = mailRouter;
