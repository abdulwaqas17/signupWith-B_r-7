// let env = require('dotenv')
// env.config();
let mongoURI = process.env.MONGO_URI;
let mongoose = require('mongoose');

const connectDB = async () => {

    try {

        await mongoose.connect(mongoURI);
        console.log('db connected successfully');
        
    } catch (e) {

        console.log('db is not connected ==>', e);
        process.exit(1); //Yeh process ko forcefully stop kar deta hai error case mein.

    }

}

module.exports = connectDB;
