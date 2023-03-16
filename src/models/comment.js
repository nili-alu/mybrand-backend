import { Schema, model } from 'mongoose';


const commentSchema= Schema({


    message: {
        type:String,
        required:true
    },
 
    date:{
        type:Date,
        default:Date.now
    }
});


export default model('comment',commentSchema);