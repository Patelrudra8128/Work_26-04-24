const express = require('express');
const routes = express.Router();
const controller = require('../controllers/indexController');
const userController = require('../controllers/userController');
const categoryCtrl = require('../controllers/categoryController');

routes.post('/addEmployee',controller.addEmployee);
routes.get('/viewEmployee',controller.viewEmployee);

routes.post('/addCompany',controller.addCompany);
routes.get('/viewCompany',controller.viewCompany);

routes.get('/OneToOne',controller.OneToOne);

routes.post('/addUser',userController.addUser);
routes.get('/viewUser',userController.viewUser);
routes.post('/addPost',userController.addPost);
routes.get('/viewPost',userController.viewPost);

routes.get('/OneToMany',userController.OneToMany);


routes.post('/addCategory',categoryCtrl.addCategory);
routes.get('/viewCategory',categoryCtrl.viewCategory);

routes.get('/ManyToMany',categoryCtrl.ManyToMany);

routes.post('/addPostCategory',categoryCtrl.addPostCategory);
routes.get('/viewPostCategory',categoryCtrl.viewPostCategory);


module.exports = routes;