const mongoose = require('mongoose');

 //const mongoURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI="mongodb+srv://shree_02:<shree_02>@cluster0.c24ud.mongodb.net/mernshree?retryWrites=true&w=majority"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
     console.log('connected to mongoose successfully');

    })
}
    module.exports=connectToMongo;