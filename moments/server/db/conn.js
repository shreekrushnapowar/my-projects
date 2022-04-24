const mongoose=require('mongoose');

DB=process.env.DATABASE;
mongoose.connect(DB).then(( )=>{
    console.log('connected successfully');
}).catch((err)=>{
    console.log(err,'No connection');
})