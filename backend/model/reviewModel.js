const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
const reviewPost = mongoose.model("review",reviewSchema);
module.exports = reviewPost;
