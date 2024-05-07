const jwt = require('jsonwebtoken')
const userModel = require('../../models/usersModel')
const userMessageData = async(req,res) =>{
    try {
      const userToken = req.cookies.user
      const params = req.params.id
      const verify = jwt.verify(userToken,process.env.PASSWORD)
      if(!verify){
      console.log('no token')
      return res.status(404).send('there is no token')
      }

      const user = await userModel.findOne({_id:verify.userId})
      const singleuserdata = await userModel.findOne({_id:params})

      if(!user){
      console.log('no no no')
      return res.status(404).send('there is no data with this token')
      }
 
      return res.status(200).send(singleuserdata)
    } catch (error) {
      console.log(error.message)
        res.status(500).send({error:error.message})
    }
}

module.exports = userMessageData