const { json } = require('body-parser')
const usersModel = require('../models/usersModel')
const cartModel = require('../models/cartModel')
const { JSONCookie } = require('cookie-parser')
const cookieParser = require('cookie-parser')
const productModel = require('../models/productModel')
const jwt = require('jsonwebtoken')

const profileData = async(req,res) =>{

    try {

       const token = req.cookies.user
       const assure = jwt.verify(token,process.env.PASSWORD)

       console.log(assure)

       if(!assure)
       return res.status(404).send('there is no token')

       const userData = await usersModel.findOne({_id:assure.userId})

       if(!userData)
       return res.status(404).send("there is no any data withis cookie")

       const cart = await cartModel.findOne({userId:assure.userId})
    
       if(!cart)
       return res.status(200).send({userData})

       productsInCart = await productModel.find({_id:cart.products})
       res.status(200).send({userData,productsInCart})
       console.log(productsInCart)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
module.exports = profileData