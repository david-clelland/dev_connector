// require and bring in Express
const express = require('express');
// require and bring in db.js file with MongoDB database config as connectDB variable
const connectDB = require('./config/db');
const path = require('path')

// app variable to use express
const app = express();


// connect Database by calling function in ./config/db
connectDB();

// init Middleware
app.use(express.json({
  extended: false
}));


// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder 
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
// set up port to run
const PORT = process.env.PORT || 5000;

// using nodemon to listen to PORT and console log message where server is runnning
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
