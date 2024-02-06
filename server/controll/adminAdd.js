




const adminModel =require('../models/adminModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function adminAdd(req,res){

    try {
         const {firstName,lastName,email,phone,password,confirmPassword} = req.body
         console.log(email)

        if(!firstName || !lastName || !email || !phone || !password || !confirmPassword)
        return res.status(401).json({error:"please fill all required data"})

        const checkExistingEmail = await adminModel.findOne({email})

        if(checkExistingEmail)
        return res.status(401).json({err:'the email is already exists in the database'})
 
        if(password != confirmPassword)
        return res.status(401).json({err:'the password must be matched'})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        console.log(hashedPassword)
        const newAdmin = new adminModel({firstName,lastName,email,phone,password:hashedPassword})
        const savedAdmin = await newAdmin.save()

        console.log(savedAdmin)


        const token = jwt.sign({token:savedAdmin._id},process.env.ADMINPASSWORD)
        res.cookie('token',token,{
            httpOnly: true
         }).send()

        console.log(token)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

module.exports = adminAdd