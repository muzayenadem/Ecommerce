const productModel = require('../../models/productModel')

async function searchProductCategory(req,res){
    try {
        const params = req.params.id
        console.log(params)
         const product = await productModel.find({category:params})
        if(!product)
        return res.status(402).send('there is no an product with this id')

        res.status(200).send(product)
        console.log(product)
    } catch (error) {
        res.status(5000).send(error.message)
        console.log(error)
    }
}

module.exports = searchProductCategory