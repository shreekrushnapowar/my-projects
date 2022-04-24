const express=require('express');
const dotenv=require('dotenv');
const path = require('path');
const app=express();
var cors = require('cors')
app.use(cors())
const staticpath=path.join(__dirname, '/public');
// express.static(path.join(__dirname, '/public'));
app.use('/public',express.static(staticpath));
// app.use(express.static('public')) ;
// app.use('/images', express.static('images'))
dotenv.config({path:'./config.env'});
require('./db/conn');

const middleware=(req,res,next)=>{
    console.log('middleware');
    next();
}

app.use(express.json());
app.get('/',middleware,(req,res)=>{
    console.log('get');
 })
app.use(require('./Routes/user'))
app.use(require('./Routes/moment'))
app.listen('3300',()=>{
    console.log('running at 3300 hello');
})