'use strict';

const express = require('express');
const router = express.Router();

router.use('/courses', require('./course'));
router.use('/records', require('./record'));

router.get('/', function (req, res) {
  res.send('API');
});

module.exports = router;
