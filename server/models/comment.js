const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllComments = new Schema(
  {
    comment_name: { type: String, required: true },
    comment_image: { type: String, required: false },
    comment_content: { type: String, required: false },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model('allComments', AllComments);
