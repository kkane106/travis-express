var todosCtrl = require('../controllers/todosCtrl');
var router = require('express').Router();

router.get('/todos', todosCtrl.index);

module.exports = router;