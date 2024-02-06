const productModel = require('../models/productModel')

const updateProduct = async(req,res)=>{
    try {

        const {name,description,detail,title,price,trickCode} = req.body

        if(!trickCode)
        return res.status(401).json({error:'you need have the trickCode to update the product'})


        if(name)
        return await productModel.updateOne({trickCode},{$set:{name}})

        if(description)
        return await productModel.updateOne({trickCode},{$set:{description}})

        if(detail)
        return await productModel.updateOne({trickCode},{$set:{detail}})

        if(title)
        return await productModel.updateOne({trickCode},{$set:{title}})

        if(price)
        return await productModel.updateOne({trickCode},{$set:{price}})



    } catch (error) {
        res.status(500).json({error:error})
    }
}

module.exports =  updateProduct