const Post = require("../models/contact-me");


//get all messages
exports.allMessage = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(404).json({ err: err , status:"404"});
  }
};

// add a message
exports.addMessage = async (req, res) => {
  try {
    const post = new Post({
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,

      
    });
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({err : error,status:"500"});
  }


};

//get message by id
exports.getOneMessage = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
   
  } catch (err) {
    res.status(404).json({ "err": err,status:"404"});
  }
};

//delete one message
exports.deleteOneMessage = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });


    res.status(200).json(removedPost);
  } catch (err) {
    res.status(404).json({ err:" the message id not found",status:"404"});
  }
};

