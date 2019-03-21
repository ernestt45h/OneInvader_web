// Configure and export Amazon Web Services SDK
const aws = require('aws-sdk');
aws.config.update(require('../settings/aws'));

module.exports = aws
