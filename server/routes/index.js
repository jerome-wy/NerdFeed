const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

// GETS ALL POSTS
router.get("/posts", controllers.getAllPosts);
router.post("/posts", controllers.createPost);
router.get("/posts/:id", controllers.getPostById);
router.put("/posts/:id", controllers.updatePost);
router.delete("/posts/:id", controllers.deletePost);

// ALL COMMENTS IN GENERAL
router.get("/comments", controllers.getAllComments);
router.post("/comments", controllers.createComment);

// GET ALL USERS
router.get("/users", controllers.getAllUsers);
router.post("/users", controllers.createUser);

module.exports = router;
