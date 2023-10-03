const express = require('express');
const router = express.Router()

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const reviewModel = require('../model/reviewModel');

// To add post
router.post("/review", async(req,res)=>{
    try {
        console.log(req.body);
        let item = req.body;
        const newReview = reviewModel(item);
        await  newReview.save();
        res.json({message:"Review successfully added"});
    } catch (error) {
        res.json({message:"Unable to post"});
    }
})

// GET

router.get("/getreview", async(req,res)=>{
    try {
        let data = await reviewModel.find();
        res.json(data);
    } catch (error) {
        res.json(error.message);
    }
})

module.exports=router;