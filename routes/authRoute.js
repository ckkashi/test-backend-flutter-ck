const express = require('express')
const {register,login} = require('../controllers/authController')

const routerr = express.Router();


const bodyParser = require('body-parser')
routerr.use(bodyParser.json());
routerr.use(bodyParser.urlencoded({ extended: true }));

routerr.post('/register',register)
routerr.post('/login',login)

module.exports = routerr 