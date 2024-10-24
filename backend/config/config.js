const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('freelancer', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
