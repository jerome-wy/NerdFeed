const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema(
	{
		name: { type: String, required: true },
		image: { type: String, required: false },
		content: { type: String, required: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("allComments", commentsSchema);
