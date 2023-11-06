'use strict';

const express = require('express');
const router = express.Router();

const today = new Date();

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

let dayBeforeYesterday = new Date();
dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

const todayStr = today.toLocaleString();
const todayDateStr = today.toLocaleDateString();
const yesterdayDateStr = yesterday.toLocaleDateString();
const dayBeforeYesterdayDateStr = dayBeforeYesterday.toLocaleDateString();

let records = [
  { id: 151, createAt: `${todayStr}`, dateTime: `${dayBeforeYesterdayDateStr} 10:00:00`, type: 10, status: 1 },
  { id: 152, createAt: `${todayStr}`, dateTime: `${dayBeforeYesterdayDateStr} 15:30:00`, type: 20, status: 0 },
  { id: 153, createAt: `${todayStr}`, dateTime: `${yesterdayDateStr} 8:30:00`, type: 10, status: 1 },
  { id: 154, createAt: `${todayStr}`, dateTime: `${yesterdayDateStr} 10:00:00`, type: 20, status: 1 },
  { id: 155, createAt: `${todayStr}`, dateTime: `${yesterdayDateStr} 17:30:00`, type: 10, status: 0 },
  { id: 156, createAt: `${todayStr}`, dateTime: `${todayDateStr} 8:30:00`, type: 20, status: 1 },
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
  setTimeout(() => res.send(data), 2500);
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
