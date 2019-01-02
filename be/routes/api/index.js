var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.use('/test', require('./test'))
router.use('/user', require('./user'))

router.get('*', function(req, res, next) {
  next(createError(404, '그런 API 없어요.'));
});

module.exports = router;
