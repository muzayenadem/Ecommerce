const productModel = require('../../models/productModel')

async function singleProduc(req,res){
    try {
        const params = req.params.id
        const product = await productModel.findOne({_id:params})
        if(!product)
        return res.status(402).send('there is no an product with this id')
       
        const regexName = new RegExp(product.name,'i')
        const regexTags = new RegExp(product.tags,'i')
        const regexCategory = new RegExp(product.category,'i')
        




         const releatedProducts = await productModel.find({$or:[{category:regexCategory}, {name:regexName},{tags:regexTags}]} )
        // const releatedProducts = await productModel.find({tags:regexTags})
        res.status(200).send({product,releatedProducts,pictures:product.image})
    } catch (error) {
        res.status(5000).send(error.message)
        console.log(error)
    }
}

module.exports = singleProduc