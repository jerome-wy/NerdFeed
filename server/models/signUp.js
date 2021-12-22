const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		confirm_password: { type: String, required: true },
		github: { type: String, required: false },
		website: { type: String, required: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("signUp", signUpSchema);
