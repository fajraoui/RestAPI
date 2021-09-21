const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all users 
router.get('/getusers',(req,res)=>{
  User.find()
  .then((data)=>res.status(202).json({data,msg:"All Users"}))
  .catch((err)=> res.status(400).json(err.message));
    
});

// add users
router.post('/register',(req,res)=>{
  const newUser=req.body
  
  const newPerson = new User(newUser);
  newPerson
  .save()
  .then(()=>res.status(202).send('user added'))
  .catch((err)=> res.status(400).json(err.message));
     
});

// delete user
router.delete('/deleteuser/:id',(req,res)=>{
  User.findByIdAndDelete(req.params.id)
  .then((data)=>res.status(202).json('user is deleted'))
  .catch((err)=> res.status(400).json(err.message));
    
});
// update user
router.put('/updateuser/:id',(req,res)=>{
  const updateData = req.body
  User.findByIdAndUpdate(req.params.id,updateData)
  .then((data)=>res.status(202).json('user is updated'))
  .catch((err)=> res.status(400).json(err.message));
    
});

module.exports= router;