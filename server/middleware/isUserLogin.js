const jwt = require('jsonwebtoken')
const auth = require('./auth')
const usersModel = require('../models/usersModel')

const isUserLogin = async(req,res, next) =>{
    try {
        const token = req.cookies.user
        const verify = jwt.verify(token,process.env.PASSWORD)
        const users = await usersModel.find({})
        for (i in users){
            if(auth){
                const profile = await usersModel.findOneAndUpdate(
                    {_id:users[i]._id},
                    {
                       active:true
                    },
                    {new:true}
                )
            }
        }
    } catch (error) {
        res.status(500).send('something is error at users login middleware')
    }
}

module.exports = isUserLogin