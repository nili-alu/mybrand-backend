const express= require('express');
const router= express.Router();
const Post_controller=require('../controllers/contact-me');


//get all message
router.get('/',Post_controller.allMessage);



//create a new message
router.post('/newMessage',Post_controller.addMessage);

//get one by id or specific post
router.get('/:postId', Post_controller.getOneMessage);


 //delete
 router.delete('/:postId', Post_controller.deleteOneMessage);
 

module.exports = router;
