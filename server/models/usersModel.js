const mongoose = require('mongoose')



const schema = mongoose.Schema({
    image:{
        type:String
    },
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
    },
    address:{
        type:String
    },
    phone:{
        type:String
    },
    gender:{
        type:String
    }
})

const usersModel = mongoose.model('users',schema)

module.exports = usersModel