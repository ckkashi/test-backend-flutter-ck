const authModel = require('../models/authSchema')
const bcrypt = require('bcryptjs')

const register = async (req,res)=>{
    console.log(req.body.name)
    let chkingUser = await authModel.findOne({email:req.body.email})
    console.log({name:req.body.name,email:req.body.email,pass:req.body.pass,find:chkingUser})

    if(chkingUser){
        res.status(403).send('user already registered')
    }else{
        var userPass = await bcrypt.hash(req.body.pass,10)
        let userData = new authModel({
            name:req.body.name,email:req.body.email,pass:userPass
        })
        userData.save()
        .then((response)=>{
            res.status(200).send("User Singup successfully")
        })
        .catch((err)=>{
            res.status(400).send("User Singup Unsuccessfully")
        })
    }
}

const login = async(req,res)=>{
    let chkingUser = await authModel.findOne({email:req.body.email})
    if(chkingUser){
        let chkPass = await bcrypt.compare(req.body.pass,chkingUser.pass)
        console.log(chkPass)
        if(chkPass){
            res.status(200).send("suucessfully login "+chkingUser.name)
        }else{
            res.status(403).send(
            "incorrect password"
        )

        }
    }else{
        res.status(403).send(
            "user not found on this email"
        )
    }
}

module.exports = {register,login}