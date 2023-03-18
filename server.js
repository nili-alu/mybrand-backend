import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import bodyParser from "body-parser";
import user from "./routes/userRoutes.js";
import postsRouter from "./routes/blogRouter.js";
import comment from "./routes/comment.js";
import contact from "./routes/contact-me.js";
import login from "./routes/authRoutes.js";

//express app
const app = express();

const dbURI ="mongodb+srv://LievinNili:lievin123@cluster0.wtd2hyd.mongodb.net/Portfolio?retryWrites=true&w=majority";
const port = process.env.PORT || 4000;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });



// Set up middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", postsRouter);
app.use("/api", comment);
app.use("/api", contact);
app.use("/api", user);
app.use("/api", login);

// Set up Swagger
import swaggerDefinition from "./swagger.js";

const options = {
  swaggerDefinition,
  apis: ["../routes/*.js"], // Path to the API routes files
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", serve, setup(swaggerSpec));

// Start the server
const server = app.listen(port, () => {
  setTimeout(() => {
    console.log(`Server listening on port ${port}`);
  }, 0);
});

export default server;