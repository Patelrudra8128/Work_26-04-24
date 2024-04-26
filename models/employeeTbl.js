const sequelize = require('../config/db');
const {Sequelize, DataTypes} = require("sequelize");


const Employee = sequelize.define("Employee", {
   id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey : true
   },
   employeeName: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

sequelize.sync().then(() => {
   console.log('Employee table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Employee;