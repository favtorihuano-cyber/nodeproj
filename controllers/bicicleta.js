var Bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function (req, res) {
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis});
};
exports.bicicleta_add_get = function (req, res) {
    res.render('bicicletas/create');
};
exports.bicicleta_add_post = function (req, res) {
    var ubicacion = [req.body.latitud, req.body.longitud];
    var bici = new Bicicleta(req.body.id, req.body.model, req.body.color, ubicacion);
    Bicicleta.add(bici);

    res.redirect('/bicicletas');
};
exports.bicicleta_delete_post = function (req, res) {
    Bicicleta.removeById(req.params.id);

    res.redirect('/bicicletas');
};

exports.bicicleta_update_get = function (req, res) {
    console.log(req.body);
    var bici = Bicicleta.findById(req.params.id);
    res.render('bicicletas/update', {bici});
};
exports.bicicleta_update_post = function (req, res) {
    var bici = Bicicleta.findById(req.params.id);

    bici.id= req.body.id;
    bici.color= req.body.color;
    bici.model= req.body.model;
    bici.ubicacion= [req.body.latitud, req.body.longitud];
    res.redirect('/bicicletas');
};