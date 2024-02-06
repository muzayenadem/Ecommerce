const productModel = require("../models/productModel")


const addProduct = async(req,res)=>{

    try {
        const {name,description,detail,title,price,trickCode} = req.body

        if(!name || !price || !title)
        return res.status(401).json({err:'fill all required data'})



        const newProduct = new productModel({
            name,
            description,
            detail,
            title,
            price,
            date : new Date(),
            trickCode
        })

        const savingProduct = await newProduct.save()
        console.log(savingProduct)

    } catch (error) {
        res.status(500).json({err:error})
    }
}


module.exports = addProduct