const productModel = require('../../models/productModel')

async function singleProduc(req,res){
    try {
        const params = req.params.id
        const product = await productModel.findOne({_id:params})
        if(!product)
        return res.status(402).send('there is no an product with this id')

        res.status(200).send(product)
        console.log(product)
    } catch (error) {
        res.status(5000).send(error.message)
        console.log(error)
    }
}

module.exports = singleProduc