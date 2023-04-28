const express = require('express');
const router = express.Router();

const Register = require('../model/registerModel')


router.post("/register", async(req,res) => {
    try{
        const register = new Register(req.body)
        await register.save()
        res.redirect("/register") 
        console.log(req.body)
    }

    catch(err){
        console.log(err)
    }
})


router.get("/register", async(req,res)=>{
    try{
        let items = await Register.find();
        
        res.render("register",{data:items})
    }
    catch(err){
        console.log(err)
        
    }
});


module.exports = router
