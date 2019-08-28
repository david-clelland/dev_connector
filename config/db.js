//  bring in and require Mongoose to connect to MongoDB
const mongoose = require('mongoose');

const config = require('config');
// set variable db as mongoURI string in default.json file
const db = config.get('mongoURI');

// TODO reseaarch further async and await and comment below function
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    console.log('MongoDB Connected')
  } catch (err) {
    console.error(err.message);
    process.exit(1)
  }
  mongoose.set('useFindAndModify', false);
}

module.exports = connectDB;
