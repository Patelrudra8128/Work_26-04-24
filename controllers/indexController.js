const services = require('../services/services');
const Company = require('../models/companyTbl');
const Employee = require('../models/employeeTbl');

const addCompany = async (req,res) => {
    try {
        const{id,companyName,EmployeeId} = req.body;
        let user = await services.createCompany({id,companyName,EmployeeId});
        if(user){
            res.json({ message : "Company added successfully", status : 1});
        }else{
            res.json({ message : "Company not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewCompany = async (req,res) => {
    try {
        let userData = await services.findCompany();
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

const addEmployee= async (req,res) => {
    try {
        const{id,employeeName,companyId} = req.body;
        let user = await services.createEmployee({id,employeeName,companyId});
        if(user){
            res.json({ message : "Employee added successfully", status : 1});
        }else{
            res.json({ message : "Employee not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewEmployee = async (req,res) => {
    try {
        let userData = await services.findEmployee();
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




const OneToOne = async (req,res) => {
    try {
        let Data = await services.OneToOne();
        if(Data){
            res.json({ message : Data, status : 1});
        }else{
            res.json({ message : "Data not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addCompany,
    viewCompany,
    addEmployee,
    viewEmployee,
    OneToOne,
}