const mongoose = require('mongoose')
const { type } = require('os')



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
    },
    carts:{
        type:String
    },
    date:{
        type:String
    },
    activity:{
        type:String
    },
    notification:{
        type:String
    },
    active:Boolean,
    messages:[]
   // messages:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
})

const usersModel = mongoose.model('users',schema)

module.exports = usersModel