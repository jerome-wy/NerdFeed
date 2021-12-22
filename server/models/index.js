const mongoose = require("mongoose");
const Post = require("./post");
const Comment = require("./comment");
const SignUp = require("./signUp");

const Post = mongoose.model("allPosts", Post);
const Comment = mongoose.model("allComments", Comment);
const SignUp = mongoose.model("allComments", SignUp);

module.exports = {
	Post,
	Comment,
	SignUp,
};
