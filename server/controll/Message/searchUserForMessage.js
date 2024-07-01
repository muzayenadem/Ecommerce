const userModel = require('../../models/usersModel')

async function searchUserForMessage(req,res){
    try {
        const params = req.params.id
        console.log(params)
        const regex = new RegExp(params,'i')
         const allUsers = await userModel.find({}).sort({firstName:1})
         const searchedUsers = await userModel.find({$or:[{lastName:regex}, {firstName:regex}]} )
        if(!searchedUsers)
        return res.status(402).send('there is no an product with this id')

        res.status(200).send({searchedUsers,allUsers})
    } catch (error) {
        res.status(5000).send(error.message)
        console.log(error)
    }
}

module.exports = searchUserForMessage