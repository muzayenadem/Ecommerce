const mongoose = require('mongoose')
const { type } = require('os')
const schema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    conversation: [
        {
            sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            text: String,
            file:String,
            //file: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
            createdAt: { type: Date, default: Date.now }
        }
    ]
});

const messageModel = mongoose.model('Messages',schema) 
module.exports = messageModel