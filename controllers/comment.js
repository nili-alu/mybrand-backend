const Post = require("../models/comment");
const fs = require("fs");
const { title } = require("process");


//get all comments
exports.allComment = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(404).json({ err: err , status:"404"});
  }
};


// add a comment
exports.addComment = async (req, res) => {
  try {
    const post = new Post({
     
      message: req.body.message,
      
    });
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({err : error,status:"500"});
  }

};


exports.getOneComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
   
  } catch (err) {
    res.status(404).json({ "err": err,status:"404"});
  }
};


exports.deleteOneComment = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });


    res.status(200).json(removedPost);
  } catch (err) {
    res.status(404).json({ err:"comment id not found",status:"404"});
  }
};


// exports.UpdateOnePost = async (req, res) => {
//   try {
//     var id = req.params.postId;
//     const updatedBlog = await Post.findByIdAndUpdate(
//       { _id: id },
//       req.body,
//       {
//         new: true,
//       }
//     );
//     if (updatedBlog) {
//       return res.status(200).json({
//         message:"updated",
//         data: updatedBlog
//       })
//     } else {
//       return res.status(500).json({
//         message:" this is not updated"
       
//       })
//     }
//   } catch (error) {
//     res.status(404).json({ status: "fail", message: error });
   
//   }
// };
