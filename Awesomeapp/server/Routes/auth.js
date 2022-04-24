const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../db/conn');
var JWT = require('jsonwebtoken');
// const JWT_SECRET = 'shreekrushnagood$boy';
const User=require('../model/UserSchema');
const authenticate=require('../middleware/authenticate');
router.get('/',(req,res)=>{
    res.send('hello world from auth');
 });
// USing promise
//  router.post('/register',(req,res)=>{
//      const {name,email,phone,work,password,cpassword}=req.body;
//     //   console.log(name,email);
//     //   res.json({message:req.body})
//     if(!name||!email||!phone||!work||!password||!cpassword)
//     {
//         return res.status(420).json({error:'fill all the fields'});
//     }
//     // to check already exist or not
//      User.findOne({email:email}).then((userExist)=>{
//          if(userExist){
//             return res.status(420).json({error:'Already Exist'});
//          }
//         //  To insert the values in database.
//          const user=new User({name,email,phone,work,password,cpassword})
//          user.save().then(()=>{
//             res.status(420).json({error:'successfully'});
//             console.log('successfully added')
//          }).catch((err)=>res.status(500).json({error:'Database error '}));
//      }).catch((err)=>{console.log(err);});

//  })
//This is for register 
router.post('/register',async (req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
   //   console.log(name,email);
   //   res.json({message:req.body})
   if(!name||!email||!phone||!work||!password||!cpassword)
   {
       return res.status(420).json({error:'fill all the fields'});
   }
   // to check already exist or not
    try {
        userExist= await User.findOne({email:email});
        if(userExist)
        {
            return res.status(420).json({error:'Already Exist'});
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
          console.log('secpass',secPass);
        // const user=new User({name,email,phone,work,secPass,secPass})
        const UserRegister = await User.create({name:name,email:email,phone:phone,work:work,password: secPass,cpassword:secPass});
        console.log(UserRegister);
        // const UserRegister=await user.save();
            if(UserRegister)
            {
                // res.status(420).json({message:'successfully added'});
                const data = {UserRegister: {id: UserRegister.id}}
                // const authToken = JWT.sign(data, JWT_SECRET);
                const authToken = JWT.sign(data,process.env.JWT_SECRET);
               
                success=true;
                console.log('authtoen',authToken);
                res.json({success,  authToken})
            }
            else
            {
                console.log('error');
            }
        
    } catch (error) {
        console.log('error')        
    }
})

// This rout is used to check user signed in or not
router.post('/signin',async (req,res)=>{
    success=false;
    try {
        const {email,password}=req.body;
        if(!email||!password)
          {
             return res.status(420).json({error:'fill all the fields'});
          }
       const   authinticate= await User.findOne({email:email});

          console.log('authenticate',authinticate);
           if(authinticate)
           {     
               const passwordcompare= await bcrypt.compare(password,authinticate.password);
               const authToken=await authinticate.generateAuthToken();
               console.log('token',authToken);
                // res.cookie("jwtokennnn",authToken,{expires:new Date(Date.now()+25892000000),httpOnly:true});  
                if(passwordcompare)
                {   
                    res.cookie("jwtokennn",authToken);
                    // res.cookie("jwtoken",authToken);
                //    console.log(cookie);
                    // console.log( res.cookie("jwtokenn",'hello'));
                    success=true;
                  
                //   res.status(420).json({success});
                // res.json({success,authToken})  
                // console.log(success);
                const data = {authinticate: {id: authinticate.id}}
                console.log(data);
                // const authToken = JWT.sign(data, JWT_SECRET);
                // const authToken = JWT.sign(data,process.env.JWT_SECRET);
            //    console.log(authToken);
                // res.json({success,authToken})             
                res.json({success,authToken})                     
                } 

                else
                {
                    res.status(420).json({error:'Not found'});
                }
                  
           }
           else {
            res.status(420).json({error:'Not found'});
            console.log('Not found')           
           }

    } catch (error) {
        return res.status(420).json({error:'error found'});
    }

});

router.get('/about',authenticate,(req,res)=>{
    console.log('hello my world');
    // res.send('hello about page');
    res.send(req.rootuser);
})
 module.exports=router;