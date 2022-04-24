const mongoose = require('mongoose');
var JWT = require('jsonwebtoken');
const {Schema}=mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
// const User=mongoose.model('USER',userSchema);
// module.export=User;
userSchema.methods.generateAuthToken= async function(){
    try {
       let token = JWT.sign({_id:this._id},process.env.JWT_SECRET);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = User = mongoose.model("USER", userSchema);