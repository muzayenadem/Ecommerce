const jwt = require('jsonwebtoken')
const usersModel = require('../models/usersModel')
const userLogout = async (req,res)=>{
    try {
        const token = req.cookies.user
        if(!token)
            return res.status(401).send('no cookies')

      
        const verify = jwt.verify(token,process.env.PASSWORD)

        if(!verify)
            return res.status(402).send('not authorized')

        const person = await usersModel.findOneAndUpdate(
            {_id:verify.userId},
            {
               active:false
            },
            {new:true}
        )
        res.clearCookie('user', { path: '/' });
        res.cookie('user','', {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        });
        const userToken = req.cookies.user
        res.status(200).json({ message: 'Logged out successfully' });
        console.log('Logged out successfully')
        // console.log({person})
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
        console.log(error.message)
    }
}

module.exports = userLogout