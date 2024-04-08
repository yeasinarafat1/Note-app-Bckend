import express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import usersignup from './routes/user.signup.js'
import userlogin from './routes/user.login.js'
import userlogout from './routes/user.logout.js'
import NoteRoute from './routes/NoteRoute.js'
dotenv.config()
let a = await mongoose.connect(process.env.DB_URI,).then(()=> console.log('connection success ful'))
.catch((err)=> console.log(err))
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
app.use('/auth/signup',usersignup)
app.use('/auth/login',userlogin)
app.use('/auth/logout',userlogout)
app.use('/note',NoteRoute)

app.listen(PORT,()=>{
    console.log('server running in port ',PORT)
})