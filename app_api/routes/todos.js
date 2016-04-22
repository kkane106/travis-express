var todosCtrl = require('../controllers/todosCtrl');
var router = require('express').Router();

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
router.get('/:id', todosCtrl.show);
router.put('/:id', todosCtrl.update);
router.delete('/:id', todosCtrl.delete);

module.exports = router;