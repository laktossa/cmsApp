const express = require("express");
const Controller = require("../controllers/history");
const router = express.Router();

router.get("/history", Controller.get);

module.exports = router;
