const Company = require('../models/companyTbl');
const Employee = require('../models/employeeTbl');



const createCompany = async (reqBody) => {
    return Company.create(reqBody);
}

const findCompany = async () => {
    return Company.findAll({
        include : [{
            model : Employee
        }]
    });
}

const createEmployee = async (reqBody) => {
    return Employee.create(reqBody);
}

const findEmployee = async () => {
    return Employee.findAll();
}

Employee.hasOne(Company);
Company.belongsTo(Employee);

const OneToOne = async () => {
    return await Company.findAll({
        include : [{
            model : Employee
        }]
    });
}

module.exports = {
    createCompany,
    findCompany,
    createEmployee,
    findEmployee,
    OneToOne
}