const express = require("express");
const router = express.Router();
const Post = require("../models/Blog");
const Post_controller = require("../controllers/blogController");
// const authenticate = require('../middlewares/authenticate');

//get all post
router.get("/blogs", Post_controller.allPost);

//submit a post
router.post("/blogs/create", Post_controller.addPost);

//get one by id or specific post
router.get("/blogs/:postId", Post_controller.getOne);

//delete
router.delete("/blogs/delete/:postId", Post_controller.deleteOnePost);

//update a post
router.put("/blogs/update/:postId", Post_controller.UpdateOnePost);

module.exports = router;
