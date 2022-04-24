const dotenv=require("dotenv");
const mongoose=require('mongoose');
const express=require('express');
const { listen } = require('express/lib/application');
const app=express();
const cors=require('cors');


dotenv.config({path:'./config.env'});
require('./db/conn');
// const User=require('./model/userSchema');
// const DB='mongodb+srv://shree_02:shree@cluster0.c24ud.mongodb.net/mernshree?retryWrites=true&w=majority';
//ROUTER LINKING
 app.use(cors());
app.use(express.json());

app.use(require('./Routes/auth'))


//middleware
// const middleware =(req,res,next)=>{
// console.log('shree');
// next();

// }
app.get('/',(req,res)=>{
   res.send('hello world');
})
// app.get('/about',middleware,(req,res)=>{
//     res.send('hello world from about');
//  })
//  app.get('/signin',(req,res)=>{
//     res.cookie("jwtoken",'hello');
//     res.send('hello world from aboutsadd');
//  })
//  app.get('/signup',(req,res)=>{
//     res.send('hello world from about');
//  })
app.listen(3300,()=>{
    console.log('running');
})