const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const router = require('./router/routes')


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
// app.use(cors({
//     origin:['http://localhost:5174','http://localhost:5173'],
//     credentials:true
//    }))
const allowedOrigins = [
    'https://my-ecommerce-git-ecommerce-muzayen.vercel.app/'
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };
  
  app.use(cors(corsOptions));
app.use(cors({
    origin: ['https://my-ecommerce-dtcm9m04k-muzayen.vercel.app','my-ecommerce-dtcm9m04k-muzayen.vercel.app/:1'],
    credentials:true
}));
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))



app.use(router)
const PORT = 4300

app.listen(PORT,()=>{
    console.log('the server is running on '+PORT)
})