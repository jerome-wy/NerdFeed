const Post = require("../models/post");
const Comment = require("../models/comment");
const SignUp = require("../models/signUp");

const getAllPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		return res.status(201).json({ posts });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const createPost = async (req, res) => {
	try {
		console.log(req.body);
		const newPost = await new Post(req.body);
		await newPost.save();
		return res.status(201).json({ newPost });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getAllComments = async (req, res) => {
	try {
		const comments = await Comment.find();
		return res.status(201).json({ comments });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const createComment = async (req, res) => {
	try {
		const newComment = await new Comment(req.body);
		await newComment.save();
		return res.status(201).json({ newComment });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getAllUsers = async (req, res) => {
	try {
		const users = await SignUp.find();
		return res.status(201).json({ users });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};
const createUser = async (req, res) => {
	try {
		const newUser = await new SignUp(req.body);
		await newUser.save();
		return res.status(201).json({ newUser });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getPostById = async (req, res) => {
	try {
		const { id } = req.params;
		const post = await Post.findById(id);
		if (post) {
			return res.status(200).json({ post });
		}
		return res.status(404).send("Post with the specified ID does not exists");
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const updatePost = async (req, res) => {
	try {
		const { id } = req.params;
		await Post.findByIdAndUpdate(id, req.body, { new: true }, (err, post) => {
			if (err) {
				res.status(500).send(err);
			}
			if (!post) {
				res.status(500).send(`Post not found!`);
			}
			return res.status(200).json(post);
			console.log("working");
		});
	} catch (error) {
		// 	return res.status(500).send(error.message);
	}
};

const deletePost = async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await Post.findByIdAndDelete(id);
		if (deleted) {
			return res.status(200).send("Post deleted");
		}
		throw new Error("Post not found");
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	getAllPosts,
	createPost,
	getAllComments,
	createComment,
	getAllUsers,
	createUser,
	getPostById,
	updatePost,
	deletePost,
};
