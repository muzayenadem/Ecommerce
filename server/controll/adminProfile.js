const jwt = require('jsonwebtoken')
const adminModel = require('../models/adminModel')
const adminProfile = async(req,res) =>{
    try {
        const adminToken = req.cookies.adminLoginToken
        const verify = jwt.verify(adminToken,process.env.ADMINPASSWORD)
        console.log(verify)
        if(!verify)
        return res.status(404).send('there is no token')

        const admindata = await adminModel.findOne({_id:verify.adminId})

        if(!admindata)
        return res.status(404).send('there is no data with this admin')

        return res.status(200).send(admindata)
    } catch (error) {
        res.status(500).send({err : 'inernal error'})
    }
}
module.exports = adminProfile