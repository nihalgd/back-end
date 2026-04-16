const express = require('express')
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post")
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


app.set('view engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/' , function(req,res){
    res.render("index")
})

app.get('/login' , function(req,res){
    res.render("login")
})

app.post('/register' , async function(req,res){
    let { username , name , age , email , password} = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User already registered");

    bcrypt.genSalt(10 , (err,salt) => {
        bcrypt.hash(password,salt, async (err,hash) => {

            let newUser = await userModel.create({   // ✅ store here
                username , 
                name , 
                age , 
                email , 
                password : hash
            });

            let token = jwt.sign(
                { email: email, userid: newUser._id },  // ✅ now works
                "shhhhh"
            ); 

            res.cookie("token" , token);
            res.send("User registered successfully");
        });
    });
});

app.post('/login' , async function(req,res){
    let {email , password} = req.body;

    let user = await userModel.findOne({email});
    if(!user) return res.status(500).send("something went wrong");

    
});

app.listen(3000);