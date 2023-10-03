const express = require ('express');
const router = express.Router();
const postData = require('../model/addPost');

router.use(express.json());
router.use(express.urlencoded({extended:true}));


// To add post
router.post("/addpost", async(req,res)=>{
    try{
        console.log(req.body);
        let item = req.body;
        const newPost = postData(item);
        await newPost.save();
        res.json({message:"Movie successfully added"});
    }catch(error){
        res.json({message:"Unable to post"});
    }
});

// To view the post
router.get("/viewpost", async (req,res)=>{
    try {
        let data = await postData.find();
        res.json(data);
    } catch (error) {
        res.json(error.message);
    }
});



module.exports=router;