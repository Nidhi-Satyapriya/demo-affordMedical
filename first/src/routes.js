const express = require("express");
const { getNumbers } = require("./controller");

const router = express.Router();

router.get("/:numberid", getNumbers);

module.exports = router;
