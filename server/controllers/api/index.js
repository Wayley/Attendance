'use strict';

const express = require('express');
const router = express.Router();

router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.use('/courses', require('./course'));
router.use('/records', require('./record'));

router.get('/', function (req, res) {
  req.accepts('application/json');
  res.send('API');
});

module.exports = router;
