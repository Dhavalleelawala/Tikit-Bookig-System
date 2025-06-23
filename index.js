const express = require('express');
const db = require('./configs/database');
const router = require('./routers');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();

const port = 8081 || process.env.PORT;
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);

app.listen(port,(err)=>{
    if(!err)
    {
        db();
        console.log("server start");
        console.log("http://localhost:"+port);
    }
})