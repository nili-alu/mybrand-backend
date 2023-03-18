import { Router } from "express";
const router = Router();
import {
  allMessage,
  addMessage,
  getOneMessage,
  deleteOneMessage,
} from "../controllers/contact-me.js";

//get all message
router.get("/messages", allMessage);

//create a new message
router.post("/messages/create", addMessage);

//get one by id or specific post
router.get("/messages/:postId", getOneMessage);

//delete
router.delete("/messages/delete/:postId", deleteOneMessage);

export default router;
