const db = require("../db/index");
const Post = require("../models/post");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
	const allPosts = [
		{
			name: "xxNiNjA-KiLLaHxx",
			title: "New Spider-Man Movie Review",
			type: "Movie Review",
			image:
				"https://sportshub.cbsistatic.com/i/2021/11/15/4a9191dc-3957-4817-b3b0-78e40c152b31/spider-man-no-way-home-poster.jpg?auto=webp&width=1200&height=1778&crop=0.675:1,smart",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			likes: 0,
		},
		{
			name: "JavaScript_John",
			title: "Why is happening with Log4j?!",
			type: "Question",
			image:
				"https://venturebeat.com/wp-content/uploads/2021/12/log4j-apache-vulnerability-software.jpg?fit=1250%2C625&strip=all",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			likes: 0,
		},
		{
			name: "WaifuPower",
			title: "Should you buy the new Razer Chroma Blackwidow Elite Keyboard?!",
			type: "Computer Review",
			image:
				"https://assets2.razerzone.com/images/og-image/razer-blackwidow-elite-ogimage.jpg",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			likes: 0,
		},
		{
			name: "General_AssemBully",
			title: "Is General Assembly worth it?",
			type: "Movie Review",
			image:
				"https://lh3.googleusercontent.com/proxy/4KhR99uizf4V3dDsb3z2IkBASzCXEjQSpWPGDSH2B-ke6G2NmaNezuX6toah1gQzxgAx5S7dikomoTMgLcMaA3jFhWB2egd-NhY4om-UjmDNKLE5ZhVuD8a8V0iS6X9htS4",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			likes: 0,
		},
	];

	await Post.insertMany(allPosts);
	console.log("Created a post using seed/allPosts.js!");
};

const run = async () => {
	await main();
	db.close();
};

run();
