const usersModel = require('../../models/usersModel')
const jwt = require('jsonwebtoken')
const messageModel = require('../../models/messageModel')
const sendMessage = async(req,res) =>{
   try {
    const userToken = req.cookies.user
    const {receiver,text} = req.body
    const assure = req.file == undefined ? true : false
   let file 
    if(!assure){
      file = req.file.filename
    }
    console.log({file})
    console.log(receiver)
    if(!userToken){
    console.log('there is no token')
    return res.status(404).send('there is no token')
    }
    const verify = jwt.verify(userToken,process.env.PASSWORD)
    const sender = verify.userId
    if(!verify){
      console.log('not authanticated')
    return res.status(404).send('this is not authorized')
    }
    const user = await usersModel.findOne({_id:verify.userId})
    const anotherUser = await usersModel.findOne({_id:receiver})

    if(!user){
      console.log('no user with this token')
    return res.status(404).send('there is no user with this token')
    }

    if(!anotherUser){
      console.log('not another user')
    return res.status(404).send('there is another  user with this id')
  }
  let conversation = await messageModel.findOne({ participants: { $all: [sender, receiver] } });

  // If conversation exists, add the new message to it
  if (conversation) {
    // if(assure){
    //   conversation.conversation.push({ sender:verify.userId, receiver, text,file});
    // }
    // if(!assure){
    //   conversation.conversation.push({ sender:verify.userId, receiver, text});
    // }
    conversation.conversation.push({ sender:verify.userId, receiver, text,file});
      await conversation.save();
      console.log('new message seccessfuly added to the conversation')
      return res.json(conversation);
  }
console.log(conversation)
  // If conversation doesn't exist, create a new one

  // if(assure){
  //   conversation = new messageModel({
  //     participants: [sender, receiver],
  //     conversation: [{ sender, receiver, text,file }]
  // });
  // }
  conversation = new messageModel({
      participants: [sender, receiver],
      conversation: [{ sender, receiver, text,file }]
  });
  await conversation.save();
  console.log('new conversation is created and the new one is added to it ')
  return res.json(conversation);





// const chat = await messageModel.find({$and :[{senderId :verify.userId},{recieverId:messageId}]})
// if (!chat) {
//   chat = new messageModel({ senderId,recieverId, messages: [] });
// }

// chat.messages.push(message);
// console.log(chat)
// await chat.save();
// res.status(200).json({ message: 'message added to chat successfully' })

// console.log('succeed')
// console.log(message,verify.userId,messageId)
//     const ifThereIsMessageBefore = anotherUser.messages.find((single) => single.id == verify.userId)
//     if(!ifThereIsMessageBefore){
//       anotherUser.messages.push({id:verify.userId,messages:[message]})
//      await anotherUser.save()
//      console.log(anotherUser.messages)
//  }

//  if(ifThereIsMessageBefore){
//    const newmessage = ifThereIsMessageBefore.messages.push(message)
//    //anotherUser.messages.push(message)
//    anotherUser.messages.find((single) =>{
//     if(single.id == verify.userId ){
//       single.messages.push(message)
//     }
//    })
//    await anotherUser.save()
//    // //  console.log({anotherUser})
   

//    //  await anotherUser.save()
//    console.log(newmessage)
//      //console.log(anotherUser.messages)
//    //console.log(ifThereIsMessageBefore.messages)
//  }
    
//   // await anotherUser.save()
//    // let cart = await cartModel.findOne({userId})

//    // if (!cart) {
//    //   cart = new cartModel({ userId, products: [] });
//    // }

//    // cart.products.push(productId);
//    // cart.quantity = quantity
//    // await cart.save();
   

   } catch (error) {
    console.log({error_Is:error.message})
    res.status(500).send({errorI_s:error.message})
   }
}
 
module.exports = sendMessage