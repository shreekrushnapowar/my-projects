const JWT=require('jsonwebtoken')
const express = require('express');
const User=require('../model/Userschema');
const bcrypt=require('bcryptjs');
const router = express.Router();
require('../db/conn');

router.post('/createadmin',async (req, res)=>{
    const {username, password}=req.body;
    if(!username||!password)
     {
       return res.status(420).json({error:'fill all the fields'});
     }
    try
     {
      userExist= await User.findOne({username:username});
      if(userExist)
      {
          return res.status(420).json({error:'Already Exist'});
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
        console.log('secpass',secPass);
     
         const UserRegister = await User.create({username:username,password: secPass});
          console.log(UserRegister);
          res.send(UserRegister);
        
    } catch (error) {
        
    }
})
router.post('/signin',async (req, res)=>{
    const {username, password}=req.body;
    console.log(username, password);
    if(!username||!password)
     {
       return res.status(420).json({success:false,error:'fill all the fields'});
     }
    try
      {
        let user = await User.findOne({ username });
        if(user)
        {
          const passwordcompare= await bcrypt.compare(password,user.password);
               
          if(passwordcompare)
          {const token=await user.generateToken();
            console.log('token',token);  
            success=true;
            res.send({token,success});
            // return res.status(200).json({success:success,token:token}); 
          }
          else{
            success=false;
            res.send({success});
            // return res.status(200).json({success:success}); 
          }
        }
        else
        {  
            success=false;
            console.log('Not found');
            res.send({success});
            // return res.status(200).json({success:success}); 
        }    
      } 
      catch (error) {
        success=false;
        return res.status(500).send({success:success});      
      }
})

module.exports = router;