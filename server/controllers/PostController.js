const getPosts = (req, res) => {
	res.send({
		message: "getting cats",
	});
};

module.exports = {
	getPosts,
};
