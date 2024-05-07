const jwt = require('jsonwebtoken')
const userModel = require('../models/usersModel')
const adminModel = require('../models/adminModel')
const cartModel = require('../models/cartModel')
const productModel = require('../models/productModel')
const singleUserData = async(req,res) =>{
    try {
      const adminToken = req.cookies.adminLoginToken
      const params = req.params.id
      const verify = jwt.verify(adminToken,process.env.ADMINPASSWORD)
      if(!verify)
      return res.status(404).send('there is no token')
    
      const admin = await adminModel.findOne({_id:verify.adminId})
      const singleuserdata = await userModel.findOne({_id:params})

      if(!admin)
      return res.status(404).send('there is no data with this token')

      const cart = await cartModel.findOne({userId:params})
     // console.log(params)

      if(!cart){
      console.log('there is no cart')
      return res.status(200).send({singleuserdata})
      }
      
      console.log(cart)
      productsInCart = await productModel.find({_id:cart.products})
      console.log({productsInCart})
      return res.status(200).send({singleuserdata,productsInCart})
    } catch (error) {
      console.log(error.message)
        res.status(500).send({error:error.message})
    }
}

module.exports = singleUserData