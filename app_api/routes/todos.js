var todosCtrl = require('../controllers/todosCtrl');
var router = require('express').Router();

router.get('/', todosCtrl.index);

module.exports = router;