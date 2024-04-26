const Category = require('../models/categoryTbl');
const Post = require('../models/postTbl');
const PostCategory = require('../models/postcategoryTbl');
const createCategory = async (reqBody) => {
    return Category.create(reqBody);
}

const findCategory = async () => {
    return Category.findAll();
}

const createPostCategory = async (reqBody) => {
    return PostCategory.create(reqBody);
}

const findPostCategory = async () => {
    return PostCategory.findAll();
}

Post.belongsToMany(Category, { through: 'PostCategory'})
Category.belongsToMany(Post, { through: 'PostCategory'})

const ManyToMany = async () => {
    return await Category.findAll({
        include : Post
    });
}

module.exports = {
    createCategory,
    findCategory,
    createPostCategory,
    findPostCategory,
    ManyToMany
}