const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    title:{
        type:String
    },
    detail:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    date :{
        type: String
    },
    trickCode:{
        type:Number
    }
})

const productModel = mongoose.model('products',schema)

module.exports = productModel