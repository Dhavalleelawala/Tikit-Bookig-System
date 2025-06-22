const express = require('express');
const db = require('./configs/database');
const router = require('./routers');
const dotenv = require('dotenv').config();
const app = express();

const port = 8081 || process.env.PORT;

app.set('view engine','ejs');
app.use(express.static('public'));

app.use('/',router);

app.listen(port,(err)=>{
    if(!err)
    {
        db()
        console.log("server start");
        console.log("http://localhost:"+port);
    }
})