const adminModel = require("../models/adminModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  adminLogin = async(req,res)=>{
    try {
         const {email,password} = req.body
         if(!email || !password) 
         return res.status(4001).json({error:'please fill all data'})

         const checkAdmin = await adminModel.findOne({email})

         if(!checkAdmin)
         return res.status(401).json({error:'wrong email or password'})

         const assurePassword = await bcrypt.compare(password,checkAdmin.password)

         if(!assurePassword)
         return res.status(401).json({error:'wrong email or password'})

         const adminLoginToken = jwt.sign({adminId:checkAdmin._id},process.env.ADMINPASSWORD)
         res.cookie('adminLoginToken', adminLoginToken, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        });
    } catch (error) {
     res.status(500).json({err:error.message})   
    }
}


module.exports = adminLogin