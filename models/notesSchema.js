const mdb = require('mongoose')

var Schema = mdb.Schema({
    title:{type:String},
    note:{type:String}
})

var notesModel = mdb.model('/notes',Schema)

module.exports = notesModel