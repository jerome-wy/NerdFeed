const { Router } = require('express');
const controllers = require('../controllers/index');
const router = Router();

router.get('/', (request, response) => response.send('This is root!'));

router.get('/posts', controllers.getAllPosts);

router.get('/comments', controllers.getAllComments);

module.exports = router;
