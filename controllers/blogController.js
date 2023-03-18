import Blog from "../models/Blog.js";
// const { title } = require("process");
// import Joi from "joi";

//get all post
export async function allBlog(req, res) {
  try {
    const posts = await Blog.find();
    res.json(posts);
  } catch (err) {
    res.status(404).json({ err: err, status: "404" });
  }
}

// add a post
export async function addBlog(req, res) {
  try {
    const post = new Blog({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
    });
    const savedBlog = await post.save();
    res.status(200).json(savedBlog);
  } catch (error) {
    res.status(500).json({ err: error, status: "500" });
  }
}


export async function getOne(req, res) {
  try {
    const post = await Blog.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ err: err, status: "404" });
  }
}

export async function deleteOneBlog(req, res) {
  try {
    const removedBlog = await Blog.remove({ _id: req.params.postId });

    res.status(200).json(removedBlog);
  } catch (err) {
    res
      .status(404)
      .json({ err: " the id of blog is  not found", status: "404" });
  }
}

export async function UpdateOneBlog(req, res) {
  try {
    var id = req.params.postId;
    const updatedBlog = await Blog.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (updatedBlog) {
      return res.status(200).json({
        message: "updated",
        data: updatedBlog,
      });
    } else {
      return res.status(500).json({
        message: " this is not updated",
      });
    }
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
}
