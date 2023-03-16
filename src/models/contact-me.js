import { Schema, model } from 'mongoose';


const contactSchema= Schema({

    email: {
        type: String,
        require: true,
    },
    subject:{
        type:String,
        required: false,
    },

    message: {
        type: String,
        required: true,
    },
    date:{
        type:Date,
        default :Date.now

    }

})

export default model('contact-me',contactSchema)
