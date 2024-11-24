// models/Pedido.js
const { DataTypes } = require('sequelize');
const sequelize = require('../bd/bd');

const Pedidos = sequelize.define('Pedido', {
 
  Quantidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },


});

module.exports = Pedidos;
