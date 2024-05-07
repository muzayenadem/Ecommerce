const jwt = require('jsonwebtoken')
const usersModel = require('../../models/usersModel')
const productModel = require('../../models/productModel')
const cartModel = require('../../models/cartModel')

const addProductToCart = async(req,res) =>{
    try {
      const userToken = req.cookies.user
      const {productId,userId,color,quantity} = req.body 
      if(!userToken)
      return res.status(404).sene('there is no token')
    
      const verify = jwt.verify(userToken, process.env.PASSWORD)
      if(!verify)
      return res.status(404).send('token is not verified')

      if(verify.userId !== userId)
      return console.log('id not authanticated')


      const user = await usersModel.findOne({_id:verify.userId})
      
      if(!user)
      return res.status(404).send('there is no data with this token')


      const product = await productModel.findOne({_id:productId})

      if(!product)
      return res.status(404).send('there is no product with this id')

      let cart = await cartModel.findOne({userId})

      if (!cart) {
        cart = new cartModel({ userId, products: [] });
      }
  
      cart.products.push(productId);
      cart.quantity = quantity
      await cart.save();
      
  
      res.status(200).json({ message: 'Product added to cart successfully' })

      console.log('succeed')
      console.log(productId,userId,color,quantity)

    } catch (error) {
        console.log(error.message)
     res.status(500).send(error.message)   
    }
}

module.exports = addProductToCart