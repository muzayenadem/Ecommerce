const mongoose = require('mongoose')

const schema = mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type: new Array(String())
    },
    title:{
        type:String
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    tags:{
        type:Array
    },
    date :{
        type: String
    }
})

const productModel = mongoose.model('products',schema)

module.exports = productModel