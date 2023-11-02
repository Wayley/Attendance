'use strict';

const express = require('express');
const router = express.Router();

let records = [
  { id: 151, createAt: '2023//11/1 12:00:00', dateTime: '2023/10/21 10:00:00', type: '感统' },
  { id: 152, createAt: '2023//11/1 12:00:05', dateTime: '2023/10/21 15:30:00', type: '全脑' },
  { id: 153, createAt: '2023//11/1 12:00:13', dateTime: '2023/10/22 11:30:00', type: '感统' },
  { id: 154, createAt: '2023//11/1 12:00:21', dateTime: '2023/10/26 11:30:00', type: '感统' },
  { id: 155, createAt: '2023//11/1 12:00:21', dateTime: '2023/10/29 16:30:00', type: '全脑' },
];

function getList() {
  return records;
}
function create(req) {
  let { id } = records[records.length - 1];
  const record = { ...req.body, id: id + 1, createAt: new Date().toLocaleString() };
  records.push(record);
  return record;
}
function getDetail(req) {
  const id = req.params.id;

  return records.find((o) => o.id == id);
}
function update(req) {
  const id = req.params.id;
  const index = records.findIndex((o) => o.id == id);
  if (index > -1) {
    records[index] = { ...records[index], ...req.body };
    return records[index];
  }
  return null;
}
function deleteData(req) {
  const id = req.params.id;
  records = records.filter((o) => o.id != id);
  return true;
}
// Get list
router.get('/', function (req, res) {
  const data = getList();
  res.send(data);
});

// Create one
router.post('/', function (req, res) {
  const data = create(req);
  res.send(data);
});

// Get one detail by id
router.get('/:id', function (req, res, next) {
  const data = getDetail(req);
  if (data) {
    res.send(data);
  } else {
    var err = new Error('cannot find user ' + req.params.id);
    err.status = 404;
    next(err);
  }
});

// Update one detail(all info) by id
router.put('/:id', function (req, res) {
  const data = update(req);
  res.send(data);
});

// Update one detail(some info) by id
router.patch('/:id', function (req, res) {
  const data = update(req);
  res.send(data);
});

// Delete one by id
router.delete('/:id', function (req, res) {
  deleteData(req);
  res.send(null);
});

module.exports = router;
