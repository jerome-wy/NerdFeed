const db = require("../db/index");
const SignUp = require("../models/signUp");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
	const allUsers = [
		{
			name: "SlimShady69",
			email: "slimshady69@gmail.com",
			password: "password",
			confirm_password: "password",
			github: "https://github.com/jerome-wy",
			website: "https://jerome-wy.com",
		},
	];

	await SignUp.insertMany(allUsers);
	console.log("Created users using seed/allUsers.js!");
};

const run = async () => {
	await main();
	db.close();
};

run();
