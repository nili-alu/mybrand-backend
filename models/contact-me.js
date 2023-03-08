const mongoose = require('mongoose');


const contactSchema= mongoose.Schema({

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

module.exports = mongoose.model('contact-me',contactSchema)
