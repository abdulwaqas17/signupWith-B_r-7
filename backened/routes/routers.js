let express = require('express');
let Router = express.Router();
let contUser = require('../controllers/contAuth');
let mdUsers = require('../middelware/mdUsers');


Router.post('/signup',mdUsers.userMdFunc, contUser.userContFunc);
Router.post('/login',contUser.userContFunc2);

module.exports = Router;