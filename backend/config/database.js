
const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log(process.env.USER, process.env.PASSWORD, process.env.DATABASE, process.env.HOST);

const sequelize = new Sequelize({
    host     : process.env.HOST,
    username     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    dialect: 'mysql', 
});

module.exports = sequelize;