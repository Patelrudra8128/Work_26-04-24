const sequelize = require('../config/db');
const {Sequelize, DataTypes} = require("sequelize");

const CategorySchema = sequelize.define("Category",{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
    },
    categoryName : {
        type : DataTypes.STRING
    }
});

sequelize.sync().then(()=>{
    console.log("Category table created");
}).catch((err)=>{
    console.log("Category table not created",err);
});

module.exports = CategorySchema;