const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllPosts = new Schema(
  {
    post_name: { type: String, required: true },
    post_title: { type: String, required: true },
    post_type: {type: String, required: true},
    post_image: { type: String, required: false },
    post_content: { type: String, required: false },
    post_likes: {type: Number, required: false},
  },
  { timestamps: true }
);

module.exports = mongoose.model('allPosts', AllPosts);
