const postsSchema = require("../models/post");
const commentsSchema = require("../models/comment");

const getAllPosts = async (req, res) => {
	try {
		const posts = await postsSchema.find();
		return res.status(201).json({ posts });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const createPost = async (req, res) => {
	try {
		const newPost = await new postsSchema(req.body);
		await newPost.save();
		return res.status(201).json({ newPost });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getAllComments = async (req, res) => {
	try {
		const comments = await commentsSchema.find();
		return res.status(201).json({ comments });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getPostsByYear = async (req, res) => {
	try {
		const comments = await commentsSchema.find();
		return res.status(201).json({ comments });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getPostsByDate = async (req, res) => {
	try {
		const comments = await commentsSchema.find();
		return res.status(201).json({ comments });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getPostsByName = async (req, res) => {
	try {
		const comments = await commentsSchema.find();
		return res.status(201).json({ comments });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	getAllPosts,
	createPost,
	getAllComments,
};
