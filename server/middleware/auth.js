const jwt = require('jsonwebtoken') 
const auth = async(req,res,next)=>{
    try {
        const token = req.cookies.user
        if(!token)
        return res.status(401).json({err:"there is no token"})

        const verifyToken = jwt.verify(token,process.env.PASSWORD)

        if(!verifyToken)
        return res.status(401).json({err:'not authorized'})

        req.user = verifyToken.user
        next()
    } catch (error) {
        res.status(500).json({err:error.message})
    }
}
module.exports = auth