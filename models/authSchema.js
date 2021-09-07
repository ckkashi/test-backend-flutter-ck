const mdb = require('mongoose')

var schema = mdb.Schema({
    name:{type:String},
    email:{type:String},
    pass:{type:String}
})

var authModel = mdb.model('/userAuthData',schema)

module.exports = authModel