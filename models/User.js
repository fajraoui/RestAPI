const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    FirstName: { 
     type:String,
     required:true
    },
    LastName:{
        type: String,
        required: [true,'you must add your last name !!'],
    },
    Age:{
        type: Number,
        required: false
    },
    Phone:{
        type: Number,
        required: true,
        unique: true,
    },
    Email:{
        type: String,
        required: [true,'you must add your email !!'],
         unique:true
    },
    Password:{
        type: String,
        required: [true,'you must add your password !!'],
    }
})  
const user=mongoose.model('person',userSchema)
module.exports=user;