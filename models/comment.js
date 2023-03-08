const mongoose = require('mongoose');


const commentSchema= mongoose.Schema({


    message: {
        type:String,
        required:true
    },
 
    date:{
        type:Date,
        default:Date.now
    }
});


module.exports= mongoose.model('comment',commentSchema);