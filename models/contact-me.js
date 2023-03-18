import mongoose from 'mongoose';


const contactSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    required: false,
  },

  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("contact-me", contactSchema);
