
const jwt = require('jsonwebtoken')


async function adminLoggedIn(req,res){
 try {
    const adminLoginToken = req.cookies.adminLoginToken
    if(!adminLoginToken) return res.json(false)
/** we need to use the followed code to athonticate the token has made from our password of config.env.PASSWORD */
    const assure = jwt.verify(adminLoginToken,process.env.ADMINPASSWORD)
   if(assure) 
   return res.json(true)
 } catch (error) {
   console.log(error.message)
    res.json(false)
 }
}
module.exports = adminLoggedIn