import Post from "../models/comment.js";

//get all comments
export async function allComment(req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(404).json({ err: err, status: "404" });
  }
}

// add a comment
export async function addComment(req, res) {
  try {
    const post = new Post({
      email: req.body.email,
      message: req.body.message,
    });
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ err: error, status: "500" });
  }
}

export async function getOneComment(req, res) {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ err: err, status: "404" });
  }
}

export async function deleteOneComment(req, res) {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });

    res.status(200).json(removedPost);
  } catch (err) {
    res.status(404).json({ err: "comment id not found", status: "404" });
  }
}
