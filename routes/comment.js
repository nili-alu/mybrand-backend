import { Router } from "express";
const router = Router();
import {
  allComment,
  addComment,
  getOneComment,
  deleteOneComment,
} from "../controllers/comment.js";

// comment routers
router.get("/comments", allComment);
router.post("/comments/create", addComment);
router.get("/comments/:postId", getOneComment);
router.delete("/comments/delete/:postId", deleteOneComment);

export default router;
