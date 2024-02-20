const { json } = require('body-parser')
const usersModel = require('../models/usersModel')
const { JSONCookie } = require('cookie-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const profileData = async(req,res) =>{

    try {

       const token = req.cookies.user
       const assure = jwt.verify(token,process.env.PASSWORD)

       if(!assure)
       return res.status(404).send('there is no token')

       const userData = await usersModel.findOne({_id:assure.userId})

       if(!userData)
       return res.status(404).send("there is no any data withis cookie")

       res.status(200).send(userData)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
module.exports = profileData