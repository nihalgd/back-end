const express = require('express')
const app = express();
const userModel = require("./models/view")
const postModel = require("./models/post");


app.get("/" , function(req,res){
    res.send("hey")
})

app.get("/create" , async function(req,res){
    let user = await userModel.create({
        username : "Nihal",
        email : "nihal@gmail.com",
        age : 25
    })
    res.send(user)
})

app.get("/post" , async function(req,res){
    let post = await postModel.create({
        postdata: "heyyy how are you men!",
        user: "69dfe38b9b661d33ae991755"
    })

    let user = await userModel.findOne({_id: "69dfe38b9b661d33ae991755"})
    user.posts.push(post._id)
    await user.save();
    res.send({post , user })
})

app.listen(3000);