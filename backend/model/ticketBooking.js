const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
    showtime:{
        type: Number,
        required:true,
    },
    ticket:{
        type: Number,
        required:true,
    },
});

const bookingModel=mongoose.model("booking",bookingSchema);
module.exports=bookingModel;