const adminModel = require('../models/adminModel')

const updateAdminProfile = async(req,res)=>{
    try {

        const {image,firstName,lastName,email,password,phone,address,gender,adminId} = req.body

        // const splitedTags =  tags && tags.split(',')
        // const splitedCategory = category && category.split(',')\
        // const imageName = req.file.filename
        const asure = req.file == undefined ? true : false
       
        if(!asure){
         const imageName = req.file.filename
            const adminProfileUpdate = await adminModel.findOneAndUpdate(
                {_id:adminId},
                {
                     image:imageName,
                     firstName,
                     lastName,
                     email,
                     password,
                     phone,
                     address,
                     gender,
                },
                {new:true}
            )
            if(adminProfileUpdate){
                console.log(adminProfileUpdate)
               res.status(200).send('the product is succesfully updated')
               } else
               console.log('errrrrr')
        }
        else{
        const adminProfileUpdate = await adminModel.findOneAndUpdate(
            {_id:adminId},
            {
                 firstName,
                     lastName,
                     email,
                     password,
                     phone,
                     address,
                     gender,
            },
            {new:true}       
        )
        if(adminProfileUpdate){
            console.log(adminProfileUpdate)
           res.status(200).send('the product is succesfully updated')
           } else
           console.log('errrrrr')
        }
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error.message)
    }
}

module.exports =  updateAdminProfile