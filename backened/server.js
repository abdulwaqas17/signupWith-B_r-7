let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let router = require('./routes/routers');
let connectDB = require('./config/db');
let cors = require('cors');
// let path = require('path')


app.use(express.json());

app.use(cors()); // ager kisi duray url/domain se request bhjo to us ko bhi allow krta h
// to connect mongo db
app.use('/uploads', express.static('./public/uploads')); 
connectDB();

// Serve static files from the build folder
// app.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for all non-static requests 
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use('/',router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('server is running on port',PORT));

// 9 - 10 ====> 5