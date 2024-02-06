const adminModel = require("../models/adminModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  adminLogin = async(req,res)=>{
    try {
         const {email,password} = req.body
         if(!email || !password) 
         return res.status(4001).json({error:'please fill all data'})

         const checkExistingEmail = await adminModel.findOne({email})

         if(!checkExistingEmail)
         return res.status(401).json({error:'wrong email or password'})

         const assurePassword = await bcrypt.compare(password,checkExistingEmail.password)

         if(!assurePassword)
         return res.status(401).json({error:'wrong email or password'})

         const token = jwt.sign({token:checkExistingEmail._id},process.env.ADMINPASSWORD)
         res.cookie('token',token,{
         httpOnly:true
         }).send()

    } catch (error) {
     res.status(500).json({err:error.message})   
    }
}


module.exports = adminLogin