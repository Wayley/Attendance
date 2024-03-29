'use strict';
const express = require('express');

const app = (module.exports = express());
const port = 3000;

// Cors
//设置跨域访问
app.all('*', function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  // //允许的header类型
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  // //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  // 可以带cookies
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/api', require('./controllers/api'));

app.get('/', function (req, res) {
  res.send('Hello from root route.');
});
app.get('/xxx', function (req, res) {
  res.send('XXX');
});
if (!module.parent) {
  app.listen(port);
  console.log(`Express started on port ${port}`);
}
