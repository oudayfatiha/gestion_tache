const express = require('express')
const mongoose = require('mongoose');
const route = require('./router/route'); 
const bodyParser  = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use('/api',route);


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/FOLA");
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
    
};

connectDB();
app.listen(3000,()=> console.log("serveur  run succes"))
 


