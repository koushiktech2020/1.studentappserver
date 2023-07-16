const express = require("express");
const app = express();
const cors = require("cors");

// database connection
const { dbconnect } = require("./utils/dbconnect");

dbconnect();

const studentroute = require("./routes/studentroute");

const PORT = "4000";

app.use(express.json());
app.use(cors());

app.use("/api/student", studentroute);

app.get("/", (req, res, next) => {
  res.send("<h1>Student rest api</h1>");
});

app.listen(PORT, () => {
  console.log(`Connection started at ${PORT}`);
});
