
const connectTOMongo=require('./db.js');
const express = require('express')
 const mongoose = require('mongoose');
connectTOMongo();
const app=express();
const port=5000;
app.use(express.json());//middleware
app.get('/', (req, res) => {
  res.send('Hello krishna how are you!')
})
//Linking routes
app.use('/api/auth',require('./routes/auth.js'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})