const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

// Define the Address model with its fields
const Address = sequelize.define('Address', {
   street: {
      type: DataTypes.STRING,
      allowNull: false
   },
   city: {
      type: DataTypes.STRING,
      allowNull: false
   },
   state: {
      type: DataTypes.STRING,
      allowNull: false
   },
   zip: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
   timestamps: false
});

// Establish the one-to-many relationship between User and Address
User.hasMany(Address, { onDelete: 'CASCADE' });
Address.belongsTo(User);

module.exports = Address;
