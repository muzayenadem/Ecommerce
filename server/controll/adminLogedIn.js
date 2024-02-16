
const jwt = require('jsonwebtoken')


async function adminLoggedIn(req,res){
 try {
    const adminLoginToken = req.cookies.adminLoginToken
    console.log({adminLoginToken:adminLoginToken})
    if(!adminLoginToken) return res.json(false)
/** we need to use the followed code to athonticate the token has made from our password of config.env.PASSWORD */
    const assure = jwt.verify(adminLoginToken,process.env.ADMINPASSWORD)
   console.log(assure)
   if(assure) 
   return res.json(true)
 } catch (error) {
   console.log(error.message)
    res.json(false)
 }
}
module.exports = adminLoggedIn