//Include dependency
let Sequelize = require('sequelize');

//Setting up the config
const sequelize = new Sequelize("c9", "lmadalina", "", {
    host: 'IP',
    port: 3306,
    dialect: 'mysql'
});

//Create the database


//Applying Cities Table to the database



module.exports = sequelize;