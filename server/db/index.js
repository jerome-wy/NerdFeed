const mongoose = require('mongoose');

let MONGODB_URI = 'mongodb://127.0.0.1:27017/NerdFeedDatabase';

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB using db/index.js');
  })
  .catch((e) => {
    console.error('Connection error from db/index.js', e.message);
  });

const db = mongoose.connection;

module.exports = db;
