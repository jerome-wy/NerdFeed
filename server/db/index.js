const mongoose = require("mongoose");
const env = require("dotenv").config();

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wuv3l.mongodb.net/NerdFeedDatabase?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("Successfully connected to MongoDB.");
	})
	.catch((e) => {
		console.error("Connection error", e.message);
	});
mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
