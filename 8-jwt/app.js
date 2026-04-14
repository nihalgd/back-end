const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
app.use(cookieParser());
const bcrypt = require('bcrypt');

app.get("/", function (req, res) {

    res.cookie("name", "nihal-goud")
    console.log(req.cookies);

    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("nihal-goud", salt, function(err, hash) {
          console.log(hash);  
        });
    });

    bcrypt.compare("nihal-goud", "$2b$10$.HQNgxlZRtLIohCCyS0tAOyPY0LCWxO0OAAunR5x3XLzuDBddn6uW", function(err, result) {
        res.send("heeyyyyyy!!")
        console.log(result);
    // result == true
    });
})


app.listen(3000);


