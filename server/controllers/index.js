const AllPosts = require('../models/post');
const AllComments = require('../models/comment');

const getAllPosts = async (req, res) => {
  try {
    const parks = await AllPosts.find();
    return res.status(201).json({ parks });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllComments = async (req, res) => {
    try {
      const parks = await AllComments.find();
      return res.status(201).json({ parks });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
  getAllParks,
  getParkById
};
