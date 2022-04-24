const express=require('express');
const Recharge=require('../model/Recharge');
const router = express.Router();


router.post('/recharge', async (req,res)=>{ 
    try
      {
        const{userid,pack,amount} =req.body;
        const newrecharge=new Recharge({userid,pack,amount});
        const savedrecharge=await newrecharge.save();
        //  success=1;
        res.json({savedrecharge});
      }
    catch{
      res.status(500).send("Internal server Error occured");  
    }
})
router.post('/getrechargedet',async(req,res)=>{
  try{
    const{date} =req.body;
    let allcust=await Recharge.find({date});
    res.json(allcust);  
  }
  catch
  {

  }
 
})
module.exports = router