'use strict';
const express = require('express');

const app = (module.exports = express());
const port = 3000;

// Cors
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  next();
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
