const mongoose = require("mongoose");
const postsSchema = require("./post");
const commentsSchema = require("./comment");

const Post = mongoose.model("allPosts", postsSchema);
const Comment = mongoose.model("allComments", commentsSchema);

module.exports = {
	Post,
	Comment,
};
