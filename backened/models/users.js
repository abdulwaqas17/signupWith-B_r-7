let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type : String, required: true},
    age : {type : Number, required: true},
    number : {type : Number, required: true, unique : true},
    email : {type : String, required: true, unique : true},
    password : {type : String, required: true},
})

let users = mongoose.model('users',userSchema);
module.exports =  users;