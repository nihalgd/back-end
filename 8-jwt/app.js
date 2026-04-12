const express = require('express')
const app = express();

app.get("/" , function(req,res){
    res.cookie("name" , "nihal")
    res.send("heeyyyyyy!!")
})

app.listen(3000);