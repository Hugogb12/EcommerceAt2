// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../bd/banco.js');

const User = sequelize.define('User', {
 
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

   senha: {
    type: DataTypes.STRING,
    allowNull: false,
   }


});

module.exports = User;
