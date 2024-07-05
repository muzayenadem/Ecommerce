
const usersModel =require('../models/usersModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function userSingup(req,res){

    try {
         const {firstName,lastName,email,password,confirmPassword} = req.body

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
        const newUser = new usersModel({firstName,lastName,email,password:hashedPassword,date: new Date(),active:false})
        const savedUser = await newUser.save()
      


        const token = jwt.sign({token:savedUser._id},process.env.PASSWORD)
        res.cookie('user', token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        });
        console.log(token)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

module.exports = userSingup