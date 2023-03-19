import mongoose from 'mongoose';


const commentSchema= mongoose.Schema({

    email: {
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
});


export default mongoose.model("comment", commentSchema);