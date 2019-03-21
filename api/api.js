const API = require('express').Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

let MailRouter = require('./routes/mail.route') ;

API.use(bodyParser.json());
API.use(cors());
API.use(morgan('dev'));


API.use('/mailer', MailRouter);


module.exports = API;
