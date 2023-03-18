import { Router } from "express";
const router = Router();

import {
  allBlog,
  addBlog,
  getOne,
  deleteOneBlog,
  UpdateOneBlog,
} from "../controllers/blogController.js";

//get all post
router.get("/blogs", allBlog);

//submit a post
router.post("/blogs/create", addBlog);

//get one by id or specific post
router.get("/blogs/:postId", getOne);

//delete
router.delete("/blogs/delete/:postId", deleteOneBlog);

//update a post
router.put("/blogs/update/:postId", UpdateOneBlog);

export default router;
