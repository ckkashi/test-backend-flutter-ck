const express = require('express')

const routerr = express.Router()
const bdp = require('body-parser')
var notesModel = require('../models/notesSchema')

routerr.use(bdp.urlencoded({extended:true}))
routerr.use(bdp.json())

routerr.post('/addNote',(req,res)=>{
    let add = new notesModel({
        title:req.body.title,
        note:req.body.note
    })
    add.save()
    .then((response)=>{
        res.send("Note Add Successfully")
    }).catch((err)=>{
        res.send("Note Add Unsuccessfully")
    })
})

routerr.get('/getNotes',async(req,res)=>{
    var notes = await notesModel.find({});
    // console.log(notes)
    res.send(notes)
    for(let i=0;i<notes.length;i++){
        console.log({
            title:notes[i].title,
            note:notes[i].note
        })
    }

})

module.exports = routerr
