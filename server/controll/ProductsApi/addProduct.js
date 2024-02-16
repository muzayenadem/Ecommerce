const productModel = require("../../models/productModel")


const addProduct = async(req,res)=>{

    try {
        const {image,name,category,title,price,description,tags,trickCode} = req.body
        console.log(image[0])
        const splitedTags = tags.split(',')
        const splitedCategory = category.split(',')
        if(!name || !price || !title)
        return res.status(401).json({err:'fill all required data'})



        const newProduct = new productModel({
            //image,
            name,
            category:splitedCategory,
            title,
            price,
            description,
            tags:splitedTags,
            date : new Date(),
            trickCode
        })

        const savingProduct = await newProduct.save()
        console.log(savingProduct)
        res.send('succesfull submitted')

    } catch (error) {
        res.status(500).json({err:error})
    }
}


module.exports = addProduct