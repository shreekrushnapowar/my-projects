const mongoose=require('mongoose');
const JWT=require('jsonwebtoken')
const {Schema}=mongoose;

const MomentSchema=new Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'USER' 
    },
    title: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },

    des: {
        type: String
    }
    
})


module.exports = Moment = mongoose.model("MOMENT", MomentSchema);