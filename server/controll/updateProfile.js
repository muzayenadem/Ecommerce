const usersModel = require('../models/usersModel')

const updateProfile = async(req,res)=>{
    try {

        const {image,firstName,lastName,email,password,phone,address,gender,userId} = req.body

        // const splitedTags =  tags && tags.split(',')
        // const splitedCategory = category && category.split(',')\
        const imageName = req.file.filename
        const asure = req.file == undefined ? true : false
       
        if(!asure){
         const imageName = req.file.filename
            const profileUpdate = await usersModel.findOneAndUpdate(
                {_id:userId},
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
            if(profileUpdate){
                console.log(profileUpdate)
               res.status(200).send('the product is succesfully updated')
               } else
               console.log('errrrrr')
        }
        else{
        const profileUpdate = await usersModel.findOneAndUpdate(
            {_id:userId},
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
        if(profileUpdate){
            console.log(profileUpdate)
           res.status(200).send('the product is succesfully updated')
           } else
           console.log('errrrrr')
        }
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error.message)
    }
}

module.exports =  updateProfile