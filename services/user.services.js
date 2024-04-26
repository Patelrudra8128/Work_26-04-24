const User = require('../models/userTbl');
const Post = require('../models/postTbl');

const createUser = async (reqBody) => {
    return User.create(reqBody);
}

const findUser = async () => {
    return User.findAll();
}

const createPost = async (reqBody) => {
    return Post.create(reqBody);
}

const findPost = async () => {
    return Post.findAll();
}

User.hasMany(Post);
Post.belongsTo(User);

const OneToMany = async () => {
    return await User.findAll({
        include : Post
    });
}

module.exports = {
    createUser,
    findUser,
    createPost,
    findPost,
    OneToMany
}