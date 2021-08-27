const express = require("express");
const { add, getList } = require("../controllers/companies");

const router = express.Router();

// Home page request
router.post("/add", add);
router.get("/listBySearch", getList);

module.exports = router;
