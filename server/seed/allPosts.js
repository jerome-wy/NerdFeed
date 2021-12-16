const { isValidObjectId } = require('mongoose');
const db = require('../db/index');
const AllPosts = require('../models/post');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const allPosts = [
    {
      name: 'xxNiNjA-KiLLaHxx',
      title: 'New Spider-Man Movie Review',
      post_type: 'Movie Review',
      image: 'https://sportshub.cbsistatic.com/i/2021/11/15/4a9191dc-3957-4817-b3b0-78e40c152b31/spider-man-no-way-home-poster.jpg?auto=webp&width=1200&height=1778&crop=0.675:1,smart',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]

  await AllPosts.insertMany(allPosts);
  console.log('Created a post using seed/allPosts.js!');
};

const run = async () => {
  await main();
  db.close();
};

run();
