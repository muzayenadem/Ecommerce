const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const router = require('./router/routes')
const isUserLogin =  require('./middleware/isUserActive')

// configuration

dotenv.config({path:'./config.env'})





// connnecting database

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('database connected')
})
.catch(err =>{
    console.log(err.message)
})
// server setup

const express = require('express')
const app = express()

// middlewares

app.use(express.json())
app.use(bodyParser.json())
app.use(express.static('Files'))
app.use(cors({
    origin:['https://ezasco.vercel.app','http://localhost:5173','https://ezasco-git-ecommerce-muzayen.vercel.app'],
    //
     credentials:true,
     methods: 'GET,POST,PUT,DELETE',
     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
   }))

   app.options('/sendmessage', cors()); // enable pre-flight requests
   app.use( async (req,res,next) =>{
    try {
        const token = req.cookies.user

        
        if(!token){
            let offLineProfile = await usersModel.findOneAndUpdate(
                {_id:verify.userId},
                {
                    active:false
                },
                {new:true}
            )
            return console.log({offLineProfile})
        }

        const verify = jwt.verify(token,process.env.PASSWORD)

        if(!verify){
            let offLineProfile = await usersModel.findOneAndUpdate(
                {_id:verify.userId},
                {
                    active:false
                },
                {new:true}
            )
            return console.log({offLineProfile})
        }

        const onlineProfile = await usersModel.findOneAndUpdate(
            {_id:verify.userId},
            {
                active:true
            },
            {new:true}
        )
        console.log({onlineProfile})
        
        next()
    } catch (error) {
        res.status(500).send('something is error at users login middleware')
    }
   })
  
//   const corsOptions = {
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     }
//   };
  
//   app.use(cors(corsOptions));


app.use(cookieParser())
app.use(express.urlencoded({extended: true}))



app.use(router)
const PORT = 4300

app.listen(PORT,()=>{
    console.log('the server is running on '+PORT)
})