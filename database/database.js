const Sequelize = require('sequelize');
const connection = new Sequelize('asking_db', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;