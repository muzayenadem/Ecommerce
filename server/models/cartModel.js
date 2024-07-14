const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    userId: String,
        products:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
        quantity:{
            type:Number
        }
  }, { timestamps: true });

const cartModel = mongoose.model('carts',cartSchema)

module.exports = cartModel