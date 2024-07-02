const usersModel = require('../../models/usersModel')
const jwt = require('jsonwebtoken')
const messageModel = require('../../models/messageModel')
const sendMessage = async(req,res) =>{
   try {
    const userToken = req.cookies.user
    const {receiver,text,file} = req.body
    console.log({receiver,text,file})
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

  if (conversation) {

    conversation.conversation.push({ sender:verify.userId, receiver, text,file});
      await conversation.save();
      console.log('new message seccessfuly added to the conversation')
      return res.json(conversation);
  }
console.log(conversation)

  conversation = new messageModel({
      participants: [sender, receiver],
      conversation: [{ sender, receiver, text,file }]
  });
  await conversation.save();
  console.log('new conversation is created and the new one is added to it ')
  return res.json(conversation);

   } catch (error) {
    console.log({error_Is:error.message})
    res.status(500).send({errorI_s:error.message})
   }
}
 
module.exports = sendMessage