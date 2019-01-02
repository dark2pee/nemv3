var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const us = [
  {
    name: '장현진',
    age: 40
  },
  {
    name: '장준우',
    age: 5
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  console.log(req.body)
  res.send({ users: us})
});

router.post('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'post ok'})
})

router.put('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'put ok'})
})

router.delete('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'del ok'})
})

router.get('*', function(req, res, next) {
  next(createError(404, '그런 API 없어요.'));
});

module.exports = router;
