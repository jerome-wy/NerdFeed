const AllPosts = require('../models/post');
const AllComments = require('../models/comment');

const getAllPosts = async (req, res) => {
  try {
    const posts = await AllPosts.find();
    return res.status(201).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllComments = async (req, res) => {
    try {
      const comments = await AllComments.find();
      return res.status(201).json({ comments });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
  getAllParks,
  getParkById
};
