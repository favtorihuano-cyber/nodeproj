var express = require('express');
var router = express.Router();
var apiController = require('../../api/bicicletaControllerAPI');

router.get('/', apiController.bicicleta_list);
router.post('/create', apiController.bicicleta_create);
router.post('/delete', apiController.bicicleta_delete);
router.post('/update', apiController.bicicleta_update);

module.exports = router;