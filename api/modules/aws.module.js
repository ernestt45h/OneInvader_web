// Configure and export Amazon Web Services SDK
const aws = require('aws-sdk');
aws.config.update({
  accessKeyId: 'AKIAI3VGVFNCPWJDUV3A',
  secretAccessKey: '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',
  region: 'us-east-1'
})

module.exports = aws
