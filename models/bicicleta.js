const mongoose = require('mongoose');

const bicicletaSchema = new mongoose.Schema({
    code: Number,
    model: String,
    color: String,
    ubicacion: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

bicicletaSchema.methods.toString = function () {
    return 'id: ' + this.id + ' | color: ' + this.color;
};

bicicletaSchema.statics.allBicis = function (cb) {
    return this.find({}, cb);
}
bicicletaSchema.statics.add = function (bici) {
    return this.create(bici);
}
bicicletaSchema.statics.findByCode = function (code) {
    return this.findOne({code: code});
}
bicicletaSchema.statics.removeByCode = function (code) {
    return this.deleteOne({code: code});
}
bicicletaSchema.statics.updateByCode = function (code, data) {
    return this.findOneAndUpdate({code: code}, {$set: data}, {returnDocument: 'after'});
}

bicicletaSchema.statics.createInstance = function (code, color, model, ubicacion) {
    return new this({
        code: code,
        color: color,
        model: model,
        ubicacion: ubicacion,
    });
}

bicicletaSchema.index({ubicacion: '2dsphere'});

module.exports = mongoose.model('Bicicleta', bicicletaSchema);