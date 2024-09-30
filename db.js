const { Sequelize } = require('sequelize');

// SQLite setup using Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' // SQLite database will be stored in this file
});

sequelize.authenticate()
    .then(() => console.log('SQLite database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
