// const jwt = require('jsonwebtoken')
// const usersModel = require('../models/usersModel')


// const isUserActive = async(req,res, next) =>{
//     try {
//         const token = req.cookies.user

        
//         if(!token){
//             let offLineProfile = await usersModel.findOneAndUpdate(
//                 {_id:verify.userId},
//                 {
//                     active:false
//                 },
//                 {new:true}
//             )
//             return console.log({offLineProfile})
//         }

//         const verify = jwt.verify(token,process.env.PASSWORD)

//         if(!verify){
//             let offLineProfile = await usersModel.findOneAndUpdate(
//                 {_id:verify.userId},
//                 {
//                     active:false
//                 },
//                 {new:true}
//             )
//             return console.log({offLineProfile})
//         }

//         const onlineProfile = await usersModel.findOneAndUpdate(
//             {_id:verify.userId},
//             {
//                 active:true
//             },
//             {new:true}
//         )
//         console.log({onlineProfile})
        
//         next()
//     } catch (error) {
//         res.status(500).send('something is error at users login middleware')
//     }
// }

// module.exports = isUserActive