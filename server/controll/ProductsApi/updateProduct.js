const productModel = require('../../models/productModel')

const updateProduct = async(req,res)=>{
    try {

        const {image,name,category,title,price,description,tags,userId} = req.body
        // const id = req.params.id

        // console.log(id)
        const splitedTags =  tags && tags.split(',')
        const splitedCategory = category && category.split(',')
        const updatedProduct = await productModel.findOneAndUpdate(
            {_id:userId},
            {
                image,
                name,
                category:splitedCategory,
                title,
                price:'$'+price,
                description,
                tags:splitedTags,
            },
            {new:true}
        )
        if(updatedProduct){
        console.log(updatedProduct)
        res.status(200).send('the product is succesfully updated')
        } else
        console.log('errrrrr')
    } catch (error) {
        res.status(500).json({error:error})
        console.log('errro')
    }
}

module.exports =  updateProduct