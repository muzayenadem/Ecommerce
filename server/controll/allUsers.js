const adminModel = require('../models/adminModel')
const usersModel = require('../models/usersModel')
const jwt = require('jsonwebtoken')
const allUsers = async(req,res) =>{
    try {
        const adminToken = req.cookies.adminLoginToken
        const verify = jwt.verify(adminToken,process.env.ADMINPASSWORD)

        if(!verify)
        return res.status('not authanticated')

        const adminer = await adminModel.findOne({_id:verify.adminId})
        if(!adminer)
        return res.status(404).send('there are alot of problem about this admin')
        

        const allusers = await usersModel.find().sort({firstName:1})
        res.status(200).send({allusers,adminer})

    } catch (error) {
        res.status(500).send('internal server problem')
    }
}
module.exports = allUsers