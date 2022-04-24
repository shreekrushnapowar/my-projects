const JWT=require('jsonwebtoken')
const express = require('express');
const User=require('../model/Userschema');
const bcrypt=require('bcryptjs');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

const {OAuth2Client}=require('google-auth-library');
require('../db/conn');
const client=new OAuth2Client('565478494922-je9goqtcj64lqgvpees4ltkoo2i77j3u.apps.googleusercontent.com');

const mailgun = require("mailgun-js");
const { updateOne } = require('../model/Userschema');
const DOMAIN = 'sandbox29e2d3336f684044b743fffc63ca4d24.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_API, domain: DOMAIN});

router.post('/register',async (req, res)=>{
    const {name,email,password}=req.body;
    if(!name||!password||!email)
     {
       return res.status(420).json({error:'fill all the fields'});
     }
     let user = await User.findOne({ email });
     if(user)
     {
      return res.json({message:'email already exist try with different',success:2})
     }
      const token=JWT.sign({name,email,password},process.env.JWT_SECRET,{expiresIn:'20m'});
      const host="http://localhost:3000";
      const data = {
        from: 'shreepowar04@gmail.com',
        to: email,
        subject: 'Activation Link',
       html:`
          <h2>Please click on given link to activate</h2>
          <p>${host}/activation/${token}`
      };
      mg.messages().send(data, function (error, body) {
        if(error)
        {
            return res.json({error:err.message,success:true})
        }
       return res.json({message:'Email has been sent to your account',success:1})
      });     
})
router.post('/signin',async (req, res)=>
{ 
    const {email, password}=req.body;
    if(!email||!password)
     {
       return res.status(420).json({success:0,error:'fill all the fields'});
     }
    try
      {
        let user = await User.findOne({ email });
        if(user)
        {
          const passwordcompare= await bcrypt.compare(password,user.password);
          const token=await user.generateToken();
          console.log('token',passwordcompare);
          
          if(passwordcompare)
          {
            success=1;
           
            res.send({token,success,user});
          }
          else{
            success=2;
            return res.status(420).json({error:'email or password wrong'});
            // res.send({success},'not found password');
          }
        }
        else
        {    success=3;
            console.log('Not found');
           
        }    

      } 
      catch (error) {
        return res.status(420).json({error:'error not found'});
        
      }
})

router.get('/activation/:id',async (req, res)=>
{
   const token=req.params.id;
    //  const {token}=req.body;
     console.log(token);
     if(token)
     {
      JWT.verify(token,process.env.JWT_SECRET,async function(err,decodetoken){
        if(err)
        {
          return res.status(400).json({success:0})
          // return 0;
        }
        const {name,email,password}=decodetoken
        const userExist= await User.findOne({email:email});
      
      if(userExist)
      {
          return res.json({error:'Already Exist',success:2});
          // return 2;
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
        console.log('secpass',secPass);
     
         const UserRegister = await User.create({name:name,password: secPass,email:email});        
         if(UserRegister){
           return res.json({success:1})
              // return 1;  
        }          
      })
     }
     else {
       return res.json({success:3})
       
    }
})

router.put('/forgetpassword',async(req,res)=>{
  const {email}=req.body;
  if(!email)
   {
     return res.status(420).json({success:3,error:'fill all the fields'});
   }
 
      let user = await User.findOne({email});
      if(!user)
      {
        return res.status(420).json({success:2,error:'Email Not Exist'});
      }
      const token=JWT.sign({_id:user._id},process.env.JWT_RESET_SECRET,{expiresIn:'20m'});

      const data = {
        from: 'shreepowar04@gmail.com',
        to: email,
        subject: 'Reset Link',
       html:`
          <h2>Please click on given link to Reset Password</h2>
          <p>${process.env.CLIENT_URL}/resetpassword/${token}`
      };
      
   User.updateOne({resetlink:token},async function(err,success)
      {
        if(err)
        {
          return res.status(420).json({success:3,error:'Internal error'});
        }
        else
        {
          mg.messages().send(data, function (error, body) {
            if(error)
            {
              return res.json({
                error:err.message
              })
            }
           return res.json({success:1,message:'Email has been sent to your account'})
          });
        }
      })
})

router.put('/resetpassword/:id',async(req,res)=>
{
  const reseretlink=req.params.id;
  const {password,conformpass}=req.body;
  if(password===conformpass)
  {
    JWT.verify(reseretlink,process.env.JWT_RESET_SECRET,async function(err,decodetoken){
      
      if(err)
      {
        return res.status(420).json({success:0,error:'incorrect token or expired token'});
      }
      else
      {    
    let user = await User.findOne({reseretlink});
    if(user)
    {
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
      User.updateOne({password:secPass},async function(err,success){
        if(err)
        {
          return res.status(420).json({success:2,error:'Internal error'});
        }
        else
        {
          return res.json({success:1,message:'password reset succefully'});
        }
      })
     
    }
    else 
    {
      return res.status(400).json({success:3,error:'user with this token doesnt exist'})
    }
  }
})

  }
  else
  {
   return res.json({success:4,message:'password doesnot matched'})
  }
}

)


router.put('/resetpasswordd/:id',async(req,res)=>
{
  const reseretlink=req.params.id;
  console.log(reseretlink);
    JWT.verify(reseretlink,process.env.JWT_RESET_SECRET,async function(err,decodetoken){    
      if(err)
      {
        return res.status(420).json({success:2,error:'incorrect token or expired token'});
      }
      else
      {
        return res.json({success:1,error:'correct token'});
      }
    }) 
})

router.post('/googlesignin',async(req,res)=>{
  const {tokenId}=req.body;
  const clnt=await client.verifyIdToken({idToken:tokenId,audience:'565478494922-je9goqtcj64lqgvpees4ltkoo2i77j3u.apps.googleusercontent.com'});
  try{
    const  {email_verified,name,email}=clnt.payload;
    if(email_verified)
    {   
          let user = await User.findOne({email});
      
          if(user)
          {
            console.log('user')
            const token=JWT.sign({_id:user._id},process.env.JWT_RESET_SECRET,{expiresIn:'7d'});
            const {_id,name,email}=user;
            res.json({token,user:{_id,name,email}})
          }
          else
          {
            console.log('hello');
            const password=email+process.env.JWT_RESET_SECRET;
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(password, salt);      
            const UserRegister = await User.create({name:name,password: secPass,email:email});
            const token=JWT.sign({_id:UserRegister._id},process.env.JWT_RESET_SECRET,{expiresIn:'7d'});
            res.json({token})
          }

    }
    else
    {
      
    }

  }
  catch{

  }
  
})

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({
      user: req.user.id,
  });
  res.json(notes);
});

module.exports = router;