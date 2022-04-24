const mongoose=require('mongoose');
const {Schema}=mongoose;

const CutomerSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now()
    }

})

// module.exports=customer=mongoose.Model("customer",CutomerSchema);
module.exports = customer = mongoose.model("customer", CutomerSchema);