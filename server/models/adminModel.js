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
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String || Number,
        required:true
    }
})

const adminModel = mongoose.model('admin',schema)

module.exports = adminModel