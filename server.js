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
// https://global-search-backend.herokuapp.com/
// Database connection
const URI = process.env.MONGODB_URI;
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, success) => {
    if (err) {
      console.log("Connection establishment failed due to some DB error");
    }

    if (success) {
      console.log("Connected to MongoDB Local");
    }
  }
);

// Routes middleware
app.use("/", homeRoutes);
app.use("/global-search", fetchCompanyRoutes);

// PORT listening
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
