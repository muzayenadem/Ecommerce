const productModel = require('../../models/productModel')

const productList = async(req,res)=>{
    try {
        const product = await productModel.find({})
        res.json(product)
    } catch (error) {
        res.status(500).json({err:"some error"})
    }
}

module.exports = productList