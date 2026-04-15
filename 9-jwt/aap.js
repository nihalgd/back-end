const express = require('express');
const app = express();

const userModel = require("./models/user")

const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.set('view engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set("views" , path.join(__dirname,"views"))
app.use(cookieParser());


app.get("/" , async function(req , res ){
    res.render("index")
})

app.post("/create" , function(req , res ){
    let {username , email , password , age} = req.body;

    bcrypt.genSalt(10 , (err,salt) => {
        bcrypt.hash(password , salt , async  (err,hash) => {
            let createdUser =  await userModel.create({
                username, 
                email, 
                password : hash, 
                age
            })

            let token = jwt.sign({email} , "shhhhhhhhhhhhh")
            res.cookie("token" , token)
            // res.send(createdUser)
            res.redirect("/")
        })
    }) 
})

app.get("/login", function(req, res) {
    res.render("login");
});

app.post("/login" , async function(req , res ){
     let user = await userModel.findOne({email: req.body.email});
    if(!user) return res.send("something went wrong");

    bcrypt.compare(req.body.password , user.password , function(err,result){
        if(result){
            let token = jwt.sign({email:user.email} , "shhhhhhhhhhhhh")
            res.cookie("token" , token);
            res.send("Yes you can Login")
        }
        else res.send("something went wrong")
    })
})



// app.get("/logout" , function(req , res){
//     res.cookie("token" , "")
//     res.redirect("/")

// })

app.listen(3000);