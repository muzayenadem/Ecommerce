
const jwt = require('jsonwebtoken')


async function loggedIn(req,res){
 try {
const token = req.cookies.user

if(!token) return res.json(false)
/** we need to use the followed code to athonticate the token has made from our password of config.env.PASSWORD */
    const assure = jwt.verify(token,process.env.PASSWORD)
 //  console.log(assure.userId)
   if(assure){
      return res.json(true)
   }
   else
   res.json(false)


 } catch (error) {
   console.log(error.message)
    res.json(false)
 }
}
module.exports = loggedIn