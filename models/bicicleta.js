var Bicicleta = function (id, model, color, ubicacion) {
    this.id = id;
    this.model = model;
    this.color = color;
    this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + ' | color: ' + this.color;
};

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    Bicicleta.allBicis.push(bici);
}

Bicicleta.findById = function (targetId) {
    var result = Bicicleta.allBicis.find(bici => bici.id == targetId);

    if(result) {
        return result;
    } else {
        throw new Error ('Bicicleta no encontrada: ' + targetId);
    }
}

Bicicleta.removeById = function (targetId) {
    Bicicleta.allBicis = Bicicleta.allBicis.filter(bici => bici.id != targetId);
}

var a = new Bicicleta(1, 'urbana', 'rojo', [-17.3935, -66.1570]);
var b = new Bicicleta(2, 'urbana', 'celeste', [-17.3835, -66.1470]);
var c = new Bicicleta(3, 'urbana', 'plomo', [-17.4035, -66.1670]);
Bicicleta.add(a);
Bicicleta.add(b);
Bicicleta.add(c);

module.exports = Bicicleta;