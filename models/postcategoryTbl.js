const sequelize = require('../config/db');
const {Sequelize, DataTypes} = require("sequelize");

const postcategory = sequelize.define("postcategory", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true
    },
   PostId: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   CategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
    tableName : 'postcategory'
  }
);


sequelize.sync().then(() => {
   console.log('postcategory table created successfully!');
}).catch((error) => {
   console.error('postcategory to create table : ', error);
});

module.exports = postcategory;