// User Schema for MongoDB/Mongoose

// Bring in Mongoose to communicate with MongoDB

const mongoose = require('mongoose');

// Create User Schema as an Object with key value pairs
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});



// Export schema as model with mongoose to MongoDB
module.exports = User = mongoose.model('user', UserSchema);
