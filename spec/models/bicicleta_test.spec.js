var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta');
var connection = require('../../database');

describe('Bicicleta Testing', function () {
    beforeEach(function () {
        connection();
    });
    afterEach(async function () {
        await Bicicleta.deleteMany({});
    });

    describe('Bicicleta create instance', () => {
        it('adding bicicletas', () => {
            const bici = Bicicleta.createInstance(1, 'verde', 'urbano', {
                type: 'Point',
                coordinates: [-17.3935, -66.1570]
            });

            expect(bici.code).toBe(1);
            expect(bici.color).toBe('verde');
            expect(bici.model).toBe('urbano');
            expect(bici.ubicacion.type).toBe('Point');
            expect(bici.ubicacion.coordinates).toEqual([-17.3935, -66.1570]);
        });
    });

    describe('Bicicleta allBicis', () => {
        it('bicicletas are empty', async() => {
            const bicis = await Bicicleta.allBicis();
            expect(bicis).toBeDefined();
            expect(bicis.length).toBe(0);
        });
    });

    describe('Bicicleta add', () => {
        it('adding bicicletas', async () => {
            const params = {
                code: 5,
                color: 'yellow',
                model: 'mountain',
                ubicacion: {
                    type: 'Point',
                    coordinates: [-17.3835, -66.1470]
                }
            };

            const bici = await Bicicleta.add(params);

            expect(bici.code).toBe(5);
            expect(bici.color).toBe('yellow');
            expect(bici.model).toBe('mountain');
            expect(bici.ubicacion.type).toBe('Point');
            expect(bici.ubicacion.coordinates).toEqual([-17.3835, -66.1470]);
        });
    });

    describe('Bicicleta update', () => {
        it('adding bicicletas', async () => {
            const params = {
                code: 5,
                color: 'yellow',
                model: 'mountain',
                ubicacion: {
                    type: 'Point',
                    coordinates: [-17.3835, -66.1470]
                }
            };

            const bici = await Bicicleta.add(params);
            
            const updateBici = await Bicicleta.updateByCode(5, {color: 'gray'});
            expect(updateBici.code).toBe(5);
            expect(updateBici.color).toBe('gray');
            expect(updateBici.model).toBe('mountain');
            expect(updateBici.ubicacion.type).toBe('Point');
            expect(updateBici.ubicacion.coordinates).toEqual([-17.3835, -66.1470]);
        });
    });
});