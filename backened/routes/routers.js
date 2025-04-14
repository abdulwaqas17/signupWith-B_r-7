let express = require('express');
let Router = express.Router();
let contUser = require('../controllers/contAuth');
let mdUsers = require('../middelware/mdUsers');
let upload = require('../middelware/upload')


Router.post('/signup',mdUsers.userMdFunc, contUser.userContFunc);
Router.post('/login',contUser.userContFunc2);
Router.post('/add-cart',upload.single('image'),contUser.addCart);
Router.get('/get-carts',contUser.getCart);

module.exports = Router;