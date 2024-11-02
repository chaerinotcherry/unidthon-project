
const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DATABASE, process.env.DB_HOST);

const sequelize = new Sequelize({
    host     : process.env.DB_HOST,
    username     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DATABASE,
    dialect: 'mysql', 
});

module.exports = sequelize;
