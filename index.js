const express = require("express");
const app = express();
require("./db/conn");

const cors = require("cors");

const studentRouter = require("./router/studentroute");

const PORT = 4000;

app.use(express.json());

app.use(cors());

app.use(studentRouter);

app.listen(PORT, () => {
  console.log(`Connection started at ${PORT}`);
});
