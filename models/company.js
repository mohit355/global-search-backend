const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Website: {
    type: String,
    required: true,
    trim: true,
  },
  Location: {
    type: String,
    required: true,
    trim: true,
  },
  Zipcode: {
    type: String,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    maxlength: 1000,
    required: true,
    trim: true,
  },
  Owner: {
    type: String,
    required: true,
    trim: true,
  },
  Established: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Company", companySchema);
