var express = require('express');
var router = express.Router();
var biciController = require('../controllers/bicicleta');

router.get('/', biciController.bicicleta_list);
router.get('/add', biciController.bicicleta_add_get)
router.post('/create', biciController.bicicleta_add_post)
router.post('/:id/delete', biciController.bicicleta_delete_post)
router.get('/:id/update', biciController.bicicleta_update_get)
router.post('/:id/update', biciController.bicicleta_update_post)

module.exports = router;