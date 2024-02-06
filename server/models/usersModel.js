const mongoose = require('mongoose')



const schema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String || Number,
        required:true
    }
})

const usersModel = mongoose.model('users',schema)

module.exports = usersModel