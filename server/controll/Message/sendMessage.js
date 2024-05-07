const usersModel = require('../../models/usersModel')
const jwt = require('jsonwebtoken')
const sendMessage = async(req,res) =>{
   try {
    const userToken = req.cookies.user
    const {message,messageId} = req.body
    if(!userToken){
    console.log('there is no token')
    return res.status(404).send('there is no token')
    }
    const verify = jwt.verify(userToken,process.env.PASSWORD)

    if(!verify){
      console.log('not authanticated')
    return res.status(404).send('this is not authorized')
    }
    const user = await usersModel.findOne({_id:verify.userId})
    const anotherUser = await usersModel.findOne({_id:messageId})

    if(!user){
      console.log('no user with this token')
    return res.status(404).send('there is no user with this token')
    }

    if(!anotherUser){
      console.log('not another user')
    return res.status(404).send('there is another  user with this id')
    }

    const ifThereIsMessageBefore = anotherUser.messages.find((single) => single.id == verify.userId)
    if(!ifThereIsMessageBefore){
      anotherUser.messages.push({id:verify.userId,messages:[message]})
     await anotherUser.save()
     console.log(anotherUser.messages)
 }

 if(ifThereIsMessageBefore){
   const newmessage = ifThereIsMessageBefore.messages.push(message)
//  const fin = anotherUser.messages.find((single)=> {
//    let assure = single.id == verify.userId
//    if(assure){
//       single.messages.push(message)
//       // ///anotherUser.save()
//       console.log('truuuuuu')
//    }

//    else console.log('false')
//  })
 //console.log(find)
 //  anotherUser.messages[0] = newmessage
   anotherUser.messages.push(newmessage)
   await anotherUser.save()
   // //  console.log({anotherUser})
   

   //  await anotherUser.save()
     console.log(anotherUser.messages)
   //console.log(ifThereIsMessageBefore.messages)
 }
    
  // await anotherUser.save()
   // let cart = await cartModel.findOne({userId})

   // if (!cart) {
   //   cart = new cartModel({ userId, products: [] });
   // }

   // cart.products.push(productId);
   // cart.quantity = quantity
   // await cart.save();
   

   } catch (error) {
    res.status(500).send({error:error.message})
   }
}
 
module.exports = sendMessage