const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
app.use(cookieParser);

app.get("/", function (req, res) {
    res.cookie("name", "nihal")
    res.send("heeyyyyyy!!")
})

app.get("/" , function(req , res) {
    console.log(req.cookies);
})

app.listen(3000);
