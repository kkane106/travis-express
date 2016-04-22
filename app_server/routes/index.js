var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers/indexCtrl');

/* GET home page. */
router.get('/', indexCtrl.index);

router.get('/new', indexCtrl.new);

router.get('/:id/edit', indexCtrl.edit);

router.get('/:id', indexCtrl.show);

module.exports = router;
