const express = require('express')

const routerr = express.Router();

routerr.use('/auth',require('./authRoute'))
routerr.use('/notes',require('./notesRoute'))

module.exports = routerr