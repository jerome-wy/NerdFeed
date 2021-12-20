const { Router } = require('express');
const controllers = require('../controllers/index');
const router = Router();

// TEST GET TO CONFIRM CONNECTION
router.get('/', (request, response) => response.send('This is root!'));

// POSTS PAGE TO VIEW ALL POSTS/NEWS FEED
router.get('/posts', controllers.getAllPosts);
// router.get('/posts/:year', controllers.getPostsByYear);
// router.get('/posts/:date', controllers.getPostsByDate);
// router.get('/posts/:name', controllers.getPostsByName);

// ALL COMMENTS IN GENERAL
router.get('/comments', controllers.getAllComments);


module.exports = router;
