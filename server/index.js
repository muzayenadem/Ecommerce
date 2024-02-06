const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

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



app.use(express.json())
app.use(cors({
    origin:['http://localhost:5174','http://localhost:5173'],
    credentials:true
   }))
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))



app.use(router)
const PORT = 4300

app.listen(PORT,()=>{
    console.log('the server is running on '+PORT)
})



// middlewares




// middlewares



