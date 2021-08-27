const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
require("dotenv").config();

// import routes
const fetchCompanyRoutes = require("./routes/fetchCompanies");
const homeRoutes = require("./routes/home");
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// Database connection
const URI = process.env.LOCAL_DB;
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, success) => {
    if (err) {
      console.log("Connection establishment failed");
    }

    if (success) {
      console.log("Connected to MongoDB");
    }
  }
);

// Routes middleware
app.use("/global-search", homeRoutes);
app.use("/global-search", fetchCompanyRoutes);

// PORT listening
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
