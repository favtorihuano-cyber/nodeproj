const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27018/bicicletas');
        
        const db = mongoose.connection;

        db.on('error', (error) => {
            console.log('DB connection error: ' + error);
        });
        db.on('connected', () => {
            console.log('DB connected');
        });
        db.on('disconnected', () => {
            console.log('DB disconnected');
        });
    } catch (error) {
        console.log('DB connection error: ' + error);
        process.exit(1);
    }
};

module.exports = connection;