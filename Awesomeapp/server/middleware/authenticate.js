const jwt=require("jsonwebtoken")
const User=require('../model/UserSchema');

const Authenticate=async(req,res,next)=>{
//    const token= localStorage.getItem('token');
const token = req.header('auth-token');   
if (!token) {
    res.status(200).send({
        error: "please authnticate"
    })
     }
    try {
        const data = jwt.verify(token,process.env.JWT_SECRET);
        //console.log(data,'hello');
        // req.user = data.user;
        const rootuser=await User.findOne({_id:data._id,"tokens.token":token});
        if(!rootuser){throw new Error('User Not Found')}
        req.token=token;
        req.rootuser=rootuser;
        req.userId=rootuser._id;
        next();
        
    } catch (error) {
        res.status(404).send('unauthorised');
        console.log(error);
        
    }

}
module.exports=Authenticate;