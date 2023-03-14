const express= require('express');
const router= express.Router();
const Post_controller=require('../controllers/comment');


// comment routers
router.get('/comments',Post_controller.allComment);
router.post('/post-comment',Post_controller.addComment);
router.get('/comments/:postId', Post_controller.getOneComment);
router.delete('/comments/delete/:postId', Post_controller.deleteOneComment);

module.exports = router;
