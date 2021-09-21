const express = require('express');
require("dotenv").config({ path: "./config/.env" });
const ConnectDB = require("./config/connectdb");
const app = express();
//use json format
app.use(express.json())
//connecting to data base
ConnectDB();

//router
app.use('/user',require('./routers/userRouter'))
//PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT,(err)=>err ? console.log('server cant listen'+err) : console.log( `server is running on port${PORT}` ))