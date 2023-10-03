const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title:{
       type: String,
       required:true,
    },
    img_url:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
    },
    language:{
        type: String,
        required:true,
    },
    cast:{
        type: String,
        required:true,
    },
    content:{
        type: String,
        required:true,
    },
    ticketrate:{
        type: Number,
        required:true,
    },
    seats:{
        type: Number,
        required:true,
    },
});

const postModel = mongoose.model("addpost",postSchema);
module.exports = postModel;