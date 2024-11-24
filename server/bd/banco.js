const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './bd/Jogos.sqlite'
  })

module.exports = sequelize; 