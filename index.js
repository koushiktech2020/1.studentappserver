const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv"); // Importing dotenv for environment variables

dotenv.config(); // Loading environment variables from .env file

// database connection
const { dbconnect } = require("./utils/dbconnect");

dbconnect();

const studentroute = require("./routes/studentroute");

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/student", studentroute);

app.get("/", (req, res, next) => {
  res.send("<h1>Student rest api</h1>");
});

app.listen(PORT, () => {
  console.log(`Connection started at ${PORT}`);
});
