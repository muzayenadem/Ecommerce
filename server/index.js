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
// app.use(cors({
//     origin:['https://my-ecommerce-e8745zc3g-muzayen.vercel.app','https://my-ecommerce-hi29l4vnn-muzayen.vercel.app'],
//     credentials:true
//    }))
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