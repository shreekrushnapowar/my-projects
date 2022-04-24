const express = require('express');
const CUSTOMER=require('../model/Customer');
const router=express.Router();
//Add customer
router.post('/addcustomer', async (req,res)=>{
   let success=0;
      try {
            const {username,userid,number}=req.body;         
            let iscustomer = await CUSTOMER.findOne({ userid });
            if(iscustomer)
            {  
               return res.send({"error":'already exist',success:2});
            }
              const customer=new CUSTOMER({username,userid,number})
              const savedcustomer=await customer.save();
              success=1;
              res.json({savedcustomer,success:1});

      } 
      catch (error) {
              console.error(error.message);
              res.status(500).send("Internal server Error occured");         
       }
})

router.get('/getcustomers',async(req,res)=>{
        let allcust=await CUSTOMER.find({});
        res.json(allcust);
})

router.delete('/delete/:id',async(req,res)=>{
   try{
         let deleteid=await CUSTOMER.findById(req.params.id)
         console.log(deleteid);
         if(!deleteid){return res.status(404).send(error)}
         const thiscustomer=await CUSTOMER.findByIdAndDelete(req.params.id)
         res.json({"success":"customer has been deleted",thiscustomer:thiscustomer});
   }
   catch{
      res.status(500).send("Internal server Error occured"); 
   }
})

router.post('/username',async(req,res)=>{
   try{
      const {userid}=req.body;
      let allcust=await CUSTOMER.findOne({userid});
      res.json(allcust.username);
   }
   catch
   { 
       res.json(1);
   }

})
module.exports = router