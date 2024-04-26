const sequelize = require('../config/db');
const {Sequelize, DataTypes} = require("sequelize");

const Company = sequelize.define("Company", {
   id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey : true
   },
   companyName: {
     type: DataTypes.STRING,
     allowNull: false
   },
  //  EmployeeId: { 
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: 'Employees',
  //     key: 'id'
  //   },
  // }
});


sequelize.sync().then(() => {
   console.log('Company table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Company;