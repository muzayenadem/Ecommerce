const productModel = require("../../models/productModel")
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads/');
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })
// const upload = multer({storage:storage});


const addProduct = async(req,res)=>{
    try {
        const {name,category,title,price,description,tags} = req.body
        // console.log(image[0])
       
// Route for uploading multiple images
    if (!req.files) {
    //   return res.status(400).send('No files were uploaded.');
    console.log('product with no file')
    }
    
        const images = req.files.map(file => file.filename);
        const splitedTags = tags.split(',')
        const splitedCategory = category.split(',')
        if(!name || !price || !title)
        return res.status(401).json({err:'fill all required data'})


        const newProduct = new productModel({
            image:images,
            name,
            category:splitedCategory,
            title,
            price,
            description,
            tags:splitedTags,
            date : new Date(),
        })

        const savingProduct = await newProduct.save()
   
        res.send('succesfull submitted')

    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
}


module.exports = addProduct