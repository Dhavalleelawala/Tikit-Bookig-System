const express = require('express');
const db = require('./configs/database');
const dotenv = require('dotenv').config();
const app = express();

const port = 8081 || process.env.PORT;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    return res.render('index');
    // return res.send("Hello");
});

app.listen(port,(err)=>{
    if(!err)
    {
        db()
        console.log("server start");
        console.log("http://localhost:"+port);
    }
})