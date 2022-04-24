const JWT=require('jsonwebtoken')
const express = require('express');
const Moment=require('../model/Momentschema');
const multer=require('multer');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
// const { v4: uuidv4 } = require('uuid');
// let path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function(req, file, cb) {   
        cb(null, Date.now() +'_'+file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('photo'), async(req, res) => {
    const userid = req.body.userid;
    const title = req.body.title;
    const des = req.body.des;
    const photo = req.file.filename;
    const moment=new Moment({ userid,title,des,photo})
    const savedmoment=await moment.save()
 
    try{
     res.json(savedmoment);
    }
    catch (err)
    {
        res.status(400).json('Error: ' + err);
    }
          
});


router.post("/fetchalldet", fetchuser, async (req, res) => {
    console.log(req.user);
    const data1=req.body.data;
    const moment = await Moment.find({
        userid: data1,
    });

    res.json(moment);
});

router.delete('/delete/:id',fetchuser,async (req,res)=>{
    try {
      //  find the note to be deleted and delete it
      let Momt=await Moment.findById(req.params.id);
      console.log(Momt.userid);
      console.log(req.user);
      if(!Momt){ return res.status(404).send("not found")} 
      if(Momt.userid.toString()!==req.user){return res.status(404).send("not allowed")}
     let momtt=await Moment.findByIdAndDelete(req.params.id)
      res.json({"success":"note has been deleted",momtt:momtt});
     } catch (error) {
        console.error(error.message);
         res.status(500).send("Internal server Error occured"); 
      }
 })
module.exports = router;