const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));  // form handling

app.get("/" , function(req,res){
    res.send("haaaaaaaannnmmmmmmm")
})
app.get("/profile" , function(req,res,next){
    return next("nope");
});

app.listen(3000);