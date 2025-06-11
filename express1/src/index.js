import express from "express";
import { dbconn } from "./db/studentdb.js";
// const studentRoute=
// const studentRoute = require("./routes/studentRoutes");

import studentRoute from "./routes/studentRoutes.js";
const app = express();
const port = 8080;
app.use(express.json());
dbconn();

// Routes
app.use("/", studentRoute);
app.get("/", (req, res) => {
  res.send("Hello Backend!");
});

app.listen(port, () => {
  console.log(`Server is Running at ${port}`);
});
