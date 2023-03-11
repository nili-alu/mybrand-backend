const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const database = process.env.DATABASE;
const secret = process.env.JWT_SECRET