// const express = require('express')
// const app = express();

// app.get("/", function(req,res){                        - - - - - - - - - - - - - - - - - - -   // routing
//     res.send("kaisseeeeeeeeeeexxx ho bhaiiyaoooo!!!!")
// })
// app.get("/profile", function(req,res){
//     res.send("badiiyaaaaaoooooo!!!!")
// })

// app.listen(3000);

// Middleware - - - - - - - - - - - - - - - Middleware - - - - - - - - - - - - - - - - Middleware - - - - - - - - - - - - - - - - - 

// const express = require('express')
// const app = express();

// app.use(function(req , res , next){
//     console.log("middleware haii yehh bc!");  // Middleware
//     next();  
// })

// app.get("/" , function(req,res){
//     res.send("Middlewere haiii !!!!")
// })

// app.listen(3000);

// Error Handling - - - - - - - - - - - - - - - Error Handling - - - - - - - - - - - - - - - - Error Handling - - - - - - - - - - - - - - - - - 

const express = require('express')
const app = express();

app.get("/" , function(req,res){
    res.send("haaaaaaaannnmmmmmmm")
})
app.get("/profile" , function(req,res,next){
    return next(new Error("nope"));
});

app.use((err , req , res , next) => {
    console.error(err.stack);
    res.status(500).send('sommmeeethinggg fukckk**inn went wrong dude!!') 
})

app.listen(3000);