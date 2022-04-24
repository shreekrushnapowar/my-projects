const mongoose=require('mongoose');
const JWT=require('jsonwebtoken')
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        msx:64
    },
    email:{
    type:String,
    trim:true,
    required:true,
    unique:true,
    lowercase:true
    },
    password:{
        type:String,
        required:true
        },
      resetlink:{
           data:String,
           default:''
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

userSchema.methods.generateToken=async function (){
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