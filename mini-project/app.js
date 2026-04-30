const express = require('express')
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post")
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const path = require('path')
const multer = require('multer')


app.set('view engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads")
  },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, function(err, bytes) {
            const fn = bytes.toString("hex") + path.extname(file.originalname);
            cb(null, fn);
    });
  }
})
const upload = multer({ storage: storage })


app.get('/' , function(req,res){
    res.render("index")
})

app.get('/login' , function(req,res){
    res.render("login")
})

app.get('/test' , function(req,res){
    res.render("test")
})

app.post('/upload', upload.single("image"), function(req,res){
    console.log(req.file);
    res.send("File uploaded");
});

app.get('/like/:id', isLoggedIn, async function(req,res){
    let post = await postModel.findById(req.params.id);
    let userId = req.user.userid;

    if(post.likes.indexOf(userId) === -1){
        post.likes.push(userId);
    }
    else{
        post.likes.splice(post.likes.indexOf(userId), 1);
    }

    await post.save();
    res.redirect("/profile");
});

app.get('/edit/:id', isLoggedIn, async function (req, res) {
    
    let post = await postModel.findById(req.params.id);
    res.render("edit", { post });

});

app.post('/update/:id', isLoggedIn, async function (req, res) {

    let { content } = req.body;

    await postModel.findByIdAndUpdate(req.params.id, {
        content: content
    });

    res.redirect("/profile");

});

app.get('/profile', isLoggedIn , async function(req,res){
    let user = await userModel
        .findOne({ email: req.user.email })
        .populate("posts");

    res.render("profile", { user });
});

app.post('/posts', isLoggedIn , async function(req,res){
    let user = await userModel.findOne({email:req.user.email})
    let {content} = req.body;

    let post = await postModel.create({
        user : user._id,
        content
    })

    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile")
})

app.post('/register' , async function(req,res){
    let { username , name , age , email , password} = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User already registered");

    bcrypt.genSalt(10 , (err,salt) => {
        bcrypt.hash(password,salt, async (err,hash) => {

            let newUser = await userModel.create({   
                username , 
                name , 
                age , 
                email , 
                password : hash
            });

            let token = jwt.sign(
                { email: email, userid: newUser._id },  
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

    bcrypt.compare(password, user.password, function(err,result){
        if(result) {
            let token = jwt.sign(
                { email: email, userid: user._id },  
                "shhhhh"
            );
        res.cookie("token" , token);
        res.status(200).redirect("/profile");
        } 
        else res.redirect("/login")
    })
});

app.get('/logout' , function(req,res){
    res.cookie("token" , "")
    res.redirect("/login")
})

app.get('/delete/:id', isLoggedIn, async function(req, res){
    await postModel.findByIdAndDelete(req.params.id);
    await userModel.findByIdAndUpdate(req.user.userid, {
        $pull: { posts: req.params.id }
    });
    res.redirect("/profile");
});

// middileware
function isLoggedIn(req, res, next) {
    if (req.cookies.token === "") {
        return res.redirect("/login");
    } 
    
    else {
        let data = jwt.verify(req.cookies.token, "shhhhh");
        req.user = data;
        next(); 
    }
}


app.listen(3000);