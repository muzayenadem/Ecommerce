const usersModel = require("../models/usersModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  userLogin = async(req,res)=>{
    try {
         const {email,password} = req.body
         if(!email || !password) 
         return res.status(4001).json({error:'please fill all data'})

         const user = await usersModel.findOne({email})

         if(!user)
         return res.status(401).json({error:'wrong email or password'})

         const assurePassword = await bcrypt.compare(password,user.password)

         if(!assurePassword)
         return res.status(401).json({error:'wrong email or password'})

         const token = jwt.sign({userId:user._id},process.env.PASSWORD,{expiresIn:'1h'});
         res.cookie('user',token,{httpOnly :true}).send()
    } catch (error) {
        
    }
}


module.exports = userLogin