const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllPosts = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: false },
    content: { type: String, required: false },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model('allPosts', AllPosts);
