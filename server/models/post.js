const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
	{
		name: { type: String, required: false },
		title: { type: String, required: true },
		type: { type: String, required: true },
		image: { type: String, required: false },
		content: { type: String, required: true },
		likes: { type: Number, required: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("allPosts", Post);
