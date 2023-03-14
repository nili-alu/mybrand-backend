const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const low = require("lowdb");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const user = require("./routes/userRoutes");
const postsRouter = require("./routes/blogRouter");
const comment = require("./routes/comment");
const contact = require("./routes/contact-me");
const login = require("./routes/authRoutes");


//express app
const app = express();
//connect to mongdb
const dbURI =
  "mongodb+srv://LievinNili:lievin123@cluster0.wtd2hyd.mongodb.net/Portfolio?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(4000, () => {
      console.log("server running on port 4000 and database connected");
    })
  )
  .catch((err) => console.log(err));

//bpdy parser

app.use(bodyParser.json());

app.use("/api", postsRouter);
app.use("/api", comment);
app.use("/api", contact);
app.use("/api", user);
app.use("/api", login);

// Set up Swagger
const swaggerDefinition = require("./swagger.json")

const options = {
  swaggerDefinition,
  apis: ['../routes/*.js'], // Path to the API routes files
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
