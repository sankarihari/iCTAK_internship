const express = require('express');
const app = new express();
const morgan = require('morgan');
app.use(morgan("dev"));
var cors = require('cors');
app.use(cors());

require('dotenv').config();
require("./db/mongodb");

const userRoute = require("./routes/userRoutes")
app.use('/api',userRoute);

const postRoute = require("./routes/postRoutes")
app.use('/api', postRoute);

const reviewRoute = require("./routes/reviewRoute")
app.use('/api',reviewRoute);


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})