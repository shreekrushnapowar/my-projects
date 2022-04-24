const express = require('express');
const fast2sms=require('fast-two-sms');
const app=express();
require('dotenv').config();
app.use(express.urlencoded({extended: false}))
const api_key='VeuPnfcSGkvpYOZ7y0wXHoJ4KUthdlbMaCIRmBNQj9LT8q3gxW24keP608rgancplu3hZodfyWKJSXYv'
app.get('/sendmessage',async (req,res)=>{
  
//   var options = {authorization : process.env.API_KEY , message : 'YOUR_MESSAGE_HERE' ,  numbers : ['9972102451']} 
 console.log(req.body);
const number='7411804424';
const message='Registered successfully for Sai Cable';
// console.log(number,message);
console.log(api_key);
var options = {authorization : api_key , message : message ,  numbers : [number]} 
// fast2sms.sendMessage(options) //Asynchronous Function.
// const response=await fast2sms.sendMessage(options);
//  res.send(response);
})
app.get('/', (req,res)=>{
    res.send('hello');
})
app.listen(3000,()=>{
    console.log('server is rrunning')
})