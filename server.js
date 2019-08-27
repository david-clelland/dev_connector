// require and bring in Express
const express = require('express');
// require and bring in db.js file with MongoDB database config as connectDB variable
const connectDB = require('./config/db')

// app variable to use express
const app = express();

// connect Database by calling function in ./config/db
connectDB();

// calling app get request to send message
app.get('/', (req, res) => res.send('API Running'));

// set up port to run
const PORT = process.env.PORT || 5000;

// using nodemon to listen to PORT and console log message where server is runnning
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));