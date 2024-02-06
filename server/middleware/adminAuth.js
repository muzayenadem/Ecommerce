const jwt = require('jsonwebtoken')
const adminAuth = async(req,res,next)=>{
    try {
        const token = req.cookies.token

        if(!token)
        return res.status(401).json({err:'un authonticate'})

        const verify = jwt.verify(token,process.env.ADMINPASSWORD)

        if(!verify)
        return res.status(401).json({err:'not mached'})

        req.user = verify.user
        next()
    } catch (error) {
        res.status(500).json({err:error.message})
    }
}

module.exports = adminAuth