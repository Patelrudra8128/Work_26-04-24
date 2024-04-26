const sequelize = require('../config/db');
const {Sequelize, DataTypes} = require("sequelize");

const PostSchema = sequelize.define("Post",{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
    },
    title : {
        type : DataTypes.STRING
    }
});

sequelize.sync().then(()=>{
    console.log("Post table created");
}).catch((err)=>{
    console.log("Post table not created",err);
});

module.exports = PostSchema;