const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const low = require("lowdb");
const bodyParser= require('body-parser');
const userRoutes = require("./routes/userRoutes");
const user = require('./routes/userRoutes');
const postsRouter= require('./routes/blogRouter');
const comment = require('./routes/comment');
const contact = require('./routes/contact-me');
const login = require('./routes/authRoutes');

const PORT = process.env.PORT || 4000;

//suwagger
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ API: [] }.write)

//express app
const app = express();

app.db =db;

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

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

//bpdy parser
  
app.use(bodyParser.json());


app.use('/blogs', postsRouter);
app.use('/comments', comment);
app.use('/contact-me', contact);
app.use("/users", user);
app.use("/login", login);

// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');


// // Set up Swagger
// const swaggerDefinition = require('./swagger.json');

// const options = {
//   swaggerDefinition,
//   apis: ['../routes/*.js'], // Path to the API routes files
// };

// const swaggerSpec = swaggerJSDoc(options);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
