const mongoose = require('mongoose');

// VARIABLES FOR SCHEMA
const AllPosts = require('./post');
const AllComments = require('./comment');


const Post = mongoose.model('./post');
const Comment = mongoose.model('./comment');

module.exports = {
  Post,
  Comment
};
