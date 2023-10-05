const express = require('express');
const router = express.Router()
const jwt = require("jsonwebtoken");
router.use(express.json());
router.use(express.urlencoded({extended:true}));

const userModel = require('../model/userModel');

// Login
router.post("/login",async (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    const user = await userModel.findOne({username:username});

    if(!user){
        res.json({message: "user not found"})
    }
    try{
        if(user.password==password){
            jwt.sign({email:username,id:user._id},"ICTAK",{expiresIn:'1d'},
            (error,token)=>{
                if (error) { 
                    res.json({message:"Token not generated"})
                } else {
                    res.json({message: "login successfully" ,token:token,data:user})
                }
            }
            )
            
        }
        else{
            res.json({message: "login failed"})
        }
    }catch(error){
        console.log(error)
    }
});

// Signup

router.post("/signup", async(req,res)=>{
    try{
        console.log(req.body);
        let item = req.body;
        const newUser = userModel(item);
        await newUser.save();
        res.json({message:"Registered successfuly"});
    }catch(error){
        res.json("Unable to register");
    }
})

module.exports=router;