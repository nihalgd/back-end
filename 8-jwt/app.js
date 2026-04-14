const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
app.use(cookieParser());
const bcrypt = require('bcrypt');

app.get("/", function (req, res) {
    res.cookie("name", "nihal")
    res.send("heeyyyyyy!!")
    console.log(req.cookies);
})

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});


app.listen(3000);
