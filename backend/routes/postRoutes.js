const express = require ('express');
const router = express.Router();
const postData = require('../model/addPost');
const jwt = require("jsonwebtoken");

router.use(express.json());
router.use(express.urlencoded({extended:true}));


// To add POST
router.post("/addpost", (req,res)=>{
    try{
        console.log(req.body);
        let item = req.body;
        const newPost = postData(item);
        jwt.verify(req.body.token,"ICTAK",
        (error,decoded)=>{
            if (decoded && decoded.email) {
                 newPost.save();
                 res.json({message:"Movie successfully added"});
            } else {
               res.json({message:"Unauthorised user"}) 
            }
        }
        )
        
    }catch(error){
        res.json({message:"Unable to post"});
    }
});

// To GET the post
router.get("/viewpost", async (req,res)=>{
    try {
        let data = await postData.find();
        res.json(data);
    } catch (error) {
        res.json(error.message);
    }
});


// to DELETE post

router.delete("/delete/:id", async (req,res)=>{
    try {
        const postId = req.params.id;
        console.log(postId);
        await postData.findByIdAndDelete(postId);
        console.log('Deleted');
        res.json({message:"Deleted successfully"});
    } catch (error) {
        res.status(400).json("Unable to delete");
    }
});

// to UPDATE post

router.put("/edit/:id", async (req,res)=>{
    try {
        console.log(req.body)
        const postId = req.params.id;
        console.log(postId);
        await postData.findByIdAndUpdate(postId, req.body);
        res.json({message:"Updated successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(400).json("unable to update");
    }
})


module.exports=router;