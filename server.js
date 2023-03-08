
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//express app
const app = express();

//connect to mongdb
const dbURI =
  "mongodb+srv://LievinNili:lievin123@cluster0.wtd2hyd.mongodb.net/Portfolio?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true } 
    )
  .then((result) =>
    app.listen(4000, () => {
      console.log("server running on port 4000 and database connected");
    })
  )
  .catch((err) => console.log(err));



  const bodyParser= require('body-parser');
app.use(bodyParser.json());



const postsRouter= require('./routes/blogRouter');

app.use('/blogs', postsRouter);

const comment = require('./routes/comment');

app.use('/comments', comment);

const contact = require('./routes/contact-me');
app.use('/contact-me', contact);
