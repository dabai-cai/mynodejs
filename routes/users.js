var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('黄锦荣热部署');
});

module.exports = router;
