let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let router = require('./routes/routers');
let connectDB = require('./config/db');
let cors = require('cors');



app.use(express.json());

app.use(cors()); // ager kisi duray url/domain se request bhjo to us ko bhi allow krta h
// to connect mongo db
connectDB();



app.use('/',router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('server is running on port',PORT));

// 9 - 10 ====> 5