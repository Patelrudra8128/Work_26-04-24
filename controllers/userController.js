const userServices  = require('../services/user.services');

const addUser = async (req,res) => {
    try {
        const{id,name,email,password,role} = req.body;
        let user = await userServices.createUser({id,name,email,password,role});
        if(user){
            res.json({ message : "User added successfully", status : 1});
        }else{
            res.json({ message : "User not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewUser = async (req,res) => {
    try {
        let userData = await userServices.findUser();
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

const addPost = async (req,res) => {
    try {
        const{id,title,UserId} = req.body;
        let user = await userServices.createPost({id,title,UserId});
        if(user){
            res.json({ message : "User added successfully", status : 1});
        }else{
            res.json({ message : "User not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewPost = async (req,res) => {
    try {
        let userData = await userServices.findPost();
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

const OneToMany = async (req,res) => {
    try {
        let data = await userServices.OneToMany();
        if(data){
            res.json({ Data : data, status : 1});
        }else{
            res.json({ message : "Data not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}


module.exports = {
    addUser,
    viewUser,
    addPost,
    viewPost,
    OneToMany
}