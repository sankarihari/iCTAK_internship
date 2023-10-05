const express = require ('express');
const router = express.Router();
const bookingData = require('../model/ticketBooking');

router.use(express.json());
router.use(express.urlencoded({extended:true}));


// POST

router.post("/ticket", async (req,res)=>{
    try{
        console.log(req.body);
        let item = req.body;
        const newTicket = bookingData(item);
        await newTicket.save();
        res.json({message:"Ticket successfully booked"});

    }catch (error) {
        res.json({message:"Unable to book"});
    }
});


module.exports=router;