const Bicicleta = require('../../models/bicicleta');
const axios = require('axios');
const server = require('../../bin/www');

describe('Bicicleta API', () => {
    afterEach(async function () {
        await Bicicleta.deleteMany({});
    });

    it('GET bicicletas status code 200', async() => {
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

        const response = await axios.get('http://localhost:3000/api/bicicletas');
        expect(response.status).toBe(200);
        expect(response.data.bicicletas.length).toBe(1);
    });

    it('POST create bicicleta', async() => {
        const response = await axios.post('http://localhost:3000/api/bicicletas/create', {
                code: 1,
                model: 'urbana',
                color: 'rojo',
                ubicacion: [-17.3935, -66.1570],
            });

        expect(response.status).toBe(200);

        const biciResult = await Bicicleta.findByCode(1);
        expect(biciResult.color).toBe('rojo')
    });

    it('POST delete bicicleta', async() => {

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

        const response = await axios.post('http://localhost:3000/api/bicicletas/delete', {
                code: 5
            });
        expect(response.status).toBe(204);
    });

    it('POST update bicicleta', async() => {
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

        const response = await axios.post('http://localhost:3000/api/bicicletas/update', {
                code: 5,
                model: 'sport',
                color: 'blue',
                ubicacion: [-17.3835, -66.1470]
            });

        expect(response.status).toBe(204);
        const biciResult = await Bicicleta.findByCode(5);
        expect(biciResult.color).toBe('blue')
    });
/*


    */
});
