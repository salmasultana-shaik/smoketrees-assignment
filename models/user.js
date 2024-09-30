const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Define the User model
const User = sequelize.define('User', {
   name: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
   timestamps: false
});

module.exports = User;
