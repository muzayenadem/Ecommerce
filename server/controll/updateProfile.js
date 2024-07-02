const usersModel = require('../models/usersModel')

const updateProfile = async(req,res)=>{
    try {

        const {image,firstName,lastName,email,password,phone,address,gender,userId} = req.body

        // const splitedTags =  tags && tags.split(',')
        // const splitedCategory = category && category.split(',')\
        // const imageName = req.file.filename
        console.log({image:image,firstName,email,password})
       
        
            const profileUpdate = await usersModel.findOneAndUpdate(
                {_id:userId},
                {
                     image:image,
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
               res.status(200).send('profile is succesfully updated')
               } else
               console.log('user profile did not update')
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error.message)
    }
}

module.exports =  updateProfile