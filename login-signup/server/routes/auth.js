const express=require('express');
const User = require('../models/user');
const router=express.Router();

// create user using :POST "api/auth/". doesont require auth
router.post('/',(req,res)=>{
    
    const user=User(req.body);
    console.log(req.body);
    user.save();
    res.send(req.body);
})
module.exports=router
