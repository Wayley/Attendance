'use strict';

const express = require('express');
const router = express.Router();
const MODULE_NAME = 'record';

// Get list
router.get('/', function (req, res) {
  res.send(`${MODULE_NAME} list`);
});

// Create one
router.post('/', function (req, res) {
  res.send(`create ${MODULE_NAME}`);
});

// Get one detail by id
router.get('/:id', function (req, res) {
  res.send(`${MODULE_NAME}: ${req.params.id}`);
});

// Update one detail(all info) by id
router.put('/:id', function (req, res) {
  res.send(`${MODULE_NAME}: ${req.params.id}`);
});

// Update one detail(some info) by id
router.patch('/:id', function (req, res) {
  res.send(`${MODULE_NAME}: ${req.params.id}`);
});

// Delete one by id
router.delete('/:id', function (req, res) {
  res.send(`${MODULE_NAME}: ${req.params.id}`);
});

module.exports = router;
