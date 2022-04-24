const mongoose=require('mongoose');
const {Schema}=mongoose;
// var todayDate = new Date(); 
var moment = require('moment');
var todayDateFormat = moment(new Date()).format("YYYY-MM-DD")
const RechargeSchema=new Schema({
    userid:{
        type:String,
        required:true
    },
    pack:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true,
        default:todayDateFormat
    }

})

// module.exports=customer=mongoose.Model("customer",CutomerSchema);
module.exports = recharge = mongoose.model("recharge", RechargeSchema);