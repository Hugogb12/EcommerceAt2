// models/Produto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../bd/bd');

const Produto = sequelize.define('Produto', {
 
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

   descricao: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   preco:{
        type: DataTypes.STRING,
        allowNull: false,
   },
   disponibilidade: {
           type: DataTypes.STRING,
           allowNull: false,
   },

});

module.exports = Produto;

