
const usersModel =require('../models/usersModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function userSingup(req,res){

    try {
         const {firstName,lastName,email,password,confirmPassword} = req.body
         console.log(email)

        if(!firstName || !lastName || !email || !password || !confirmPassword)
        return res.status(401).json({error:"please fill all required data"})

        const checkExistingEmail = await usersModel.findOne({email})

        if(checkExistingEmail)
        return res.status(401).json({err:'the email is already exists in the database'})
 
        if(password != confirmPassword)
        return res.status(401).json({err:'the password must be matched'})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        console.log(hashedPassword)
        const newUser = new usersModel({firstName,lastName,email,password:hashedPassword})
        const savedUser = await newUser.save()

        console.log(savedUser)


        const token = jwt.sign({token:savedUser._id},process.env.PASSWORD)
        res.cookie('token',token,{
            httpOnly: true
         }).send()

        console.log(token)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

module.exports = userSingup