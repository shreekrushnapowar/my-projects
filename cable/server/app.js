const dotenv=require('dotenv')
const express=require('express');
const mongoose=require('mongoose');
var cors = require('cors')
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(cors());
// console.log('hello');
//const DB="mongodb+srv://shree_02:shree02@cluster0.ayc0b.mongodb.net/cable?retryWrites=true&w=majority"
//middleware 

const middleware=(req,res,next)=>{
    console.log('middleware');
    next();
}
app.use(express.json());
app.use(require('./Routes/rechargerout'));
app.use(require('./Routes/customerroute'));
app.use(require('./Routes/user'));

// middleware();

app.get('/hello', middleware,(req,res)=>{
    console.log('hello');
})


app.listen(3300,()=>{
    console.log('server is running at 3300');
})