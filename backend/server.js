const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");
const incidentRoutes = require("./routes/IncidentRoutes");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoutes);

app.use("/incident", incidentRoutes);

connectDB();

app.listen(8000, () => {
  console.log("Server running");
});
