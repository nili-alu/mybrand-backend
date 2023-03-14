const express= require('express');
const router= express.Router();
const Post_controller=require('../controllers/contact-me');


//get all message
router.get('/messages',Post_controller.allMessage);



//create a new message
router.post('/post-message',Post_controller.addMessage);

//get one by id or specific post
router.get('/messages/:postId', Post_controller.getOneMessage);


 //delete
 router.delete('/messages/delete/:postId', Post_controller.deleteOneMessage);
 

module.exports = router;
