const express = require("express");
const { home } = require("../controllers/home");

const router = express.Router();

// Home page request
router.get("/", home);

module.exports = router;
