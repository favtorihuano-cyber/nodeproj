const Bicicleta = require('../models/bicicleta');
var bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function (req, res) {
    res.status(200).json({
        bicicletas: bicicleta.allBicis
    });
}

exports.bicicleta_create = function (req, res) {
    var bici = new Bicicleta(req.body.id, req.body.model, req.body.color);
    bici.ubicacion = [req.body.longitud, req.body.latitud];
    bicicleta.add(bici);

    res.status(200).json({
        bicicleta: bici
    });
}

exports.bicicleta_delete = function (req, res) {
    Bicicleta.removeById(req.body.id);
    res.status(204).send()
}

exports.bicicleta_update = function (req, res) {
    var bici = Bicicleta.findById(req.body.id);

    bici.id = req.body.id;
    bici.model = req.body.model;
    bici.color = req.body.color;
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    res.status(204).send()
}