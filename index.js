const express = require('express')
const cors = require('cors')
const bd = require('body-parser')
const mdb = require('mongoose')
const authModel = require('./models/authSchema')
const bcrypt = require('bcryptjs')
const mainRoute = require('./routes/mainRoute')
const notesModel = require('./models/notesSchema')
const { response } = require('express')

const app = express()
const serverPort =process.env.PORT || 2000

//connecting app with database
mdb.connect('mongodb+srv://kashifshaikh:12345@cluster0.sm5uj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mdb.connection.on('connected',()=>{
    console.log('app connected with db')
})

mdb.connection.on('error',()=>{
    console.log('app not connected with db')
})

app.use(mainRoute)
app.use(cors())
app.use(bd.urlencoded(
    {extended:true}
))
app.use(bd.json())

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/phone',(req,res)=>{
    res.send('Hello world from the phone')
}) 

app.post('/sign',(req,res)=>{
    res.send({name:req.body.name,email:req.body.email})
})

// app.post('/addNote',(req,res)=>{
//     let add = new notesModel({
//         title:req.body.title,
//         note:req.body.note
//     })
//     add.save()
//     .then((response)=>{
//         res.send("Note Add Successfully")
//     }).catch((err)=>{
//         res.send("Note Add Unsuccessfully")
//     })
// })

// app.get('/getNotes',async(req,res)=>{
//     // var notes = notesModel.find(
        
//     // );
//     var notes = await notesModel.find({});
//     console.log(notes)
// })

app.listen(serverPort,()=>{
    console.log('server has been started and run at this = ' + serverPort)
})