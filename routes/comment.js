const express= require('express');
const router= express.Router();
const Post_controller=require('../controllers/comment');


//get all comment
router.get('/',Post_controller.allComment);



//create a comment
router.post('/createComment',Post_controller.addComment);

//authentication
// this is will replace the above line
// router.post('/createComment',{name of login controller}, Post_controlrle.addComment);


//get one by id or specific post
router.get('/:postId', Post_controller.getOneComment);


 //delete
 router.delete('/:postId', Post_controller.deleteOneComment);

module.exports = router;
