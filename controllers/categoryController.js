const categoryServices  = require('../services/categoryServices');

const addCategory = async (req,res) => {
    try {
        const{id,categoryName} = req.body;
        let user = await categoryServices.createCategory({id,categoryName});
        if(user){
            res.json({ message : "Category added successfully", status : 1});
        }else{
            res.json({ message : "Category not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewCategory = async (req,res) => {
    try {
        let userData = await categoryServices.findCategory();
        if(userData){
            res.json({ Data : userData, status : 1});
        }else{
            res.json({ message : "Data not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addPostCategory = async (req,res) => {
    try {
        const{id,PostId,CategoryId} = req.body;
        let user = await categoryServices.createPostCategory({id,PostId,CategoryId});
        if(user){
            res.json({ message : "PostCategory added successfully", status : 1});
        }else{
            res.json({ message : "PostCategory not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewPostCategory = async (req,res) => {
    try {
        let userData = await categoryServices.findPostCategory();
        if(userData){
            res.json({ Data : userData, status : 1});
        }else{
            res.json({ message : "Data not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const ManyToMany = async (req,res) => {
    try {
        let userData = await categoryServices.ManyToMany();
        if(userData){
            res.json({ Data : userData, status : 1});
        }else{
            res.json({ message : "Data not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addCategory,
    viewCategory,
    addPostCategory,
    viewPostCategory,
    ManyToMany
}