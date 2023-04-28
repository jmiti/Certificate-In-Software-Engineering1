const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    lastname: {
        type:String,
        trim:true
    },
    country:{
        type:String,
        trim:true
    },
    town:{
        type:String,
        trim:true
    },
    zip:{
        type:String,
        trim:true
    },
    phoneNumber1:{
        type:String,
        trim:true
    },
    phoneNumber2:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    state:{
        type:String,
        trim:true
    },
    dob:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },

})

module.exports = mongoose.model("Register", registerSchema)