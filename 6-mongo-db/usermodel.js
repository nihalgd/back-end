const mongoose = require('mongoose');

mongoose.connect(`mongodbhttp://localhost:3000/nihalgoud`);

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String
})

mongoose.model("user" , userSchema);