const express = require('express');
const app = express();
const api = require('./api');

app.use('/api',api);

app.listen(80, (err)=>{
  console.log('test server running on localhost')
})
