const { Router } = require("express");
const controllers = require("../controllers/index");
const router = Router();

// GETS ALL POSTS
router.get("/posts", controllers.getAllPosts);
router.post("/posts", controllers.createPost);

// ALL COMMENTS IN GENERAL
router.get("/comments", controllers.getAllComments);

module.exports = router;
