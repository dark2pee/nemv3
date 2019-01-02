var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ msg: '루트폴더', a: 22222})
});

router.get('/hello', function(req, res, next) {
  res.send({ msg: 'hello', a: 22222})
});

router.get('*', function(req, res, next) {
  next(createError(404, '그런 API 없어요.'));
});

module.exports = router;
