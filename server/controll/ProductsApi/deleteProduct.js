const productModel = require('../../models/productModel')

const deleteProduct = async (req,res) =>{
    try {
        const id = req.params.id
        const product = await productModel.findOneAndDelete({_id:id})
        res.status(200).send('product seccesfully deleted')
        console.log(product)
    } catch (error) {
        res.status(500).json({err:error.message})
        console.log(error.message)
    }
}

module.exports = deleteProduct