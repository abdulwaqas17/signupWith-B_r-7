let mongoose = require('mongoose');

const cartShema = new mongoose.Schema({
    name : String,
    price : Number,
    description : String,
    image : String,
    
})

let carts = mongoose.model('carts',cartShema);
module.exports =  carts;