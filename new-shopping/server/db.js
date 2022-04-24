const mongoose=require('mongoose');
const mongoURI='mongodb+srv://shree_02:shree@cluster0.c24ud.mongodb.net/mernshree?retryWrites=true&w=majority';

const connectTomongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo succesfully");
    });
}
module.exports=connectTomongo;