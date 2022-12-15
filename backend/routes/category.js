const express = require("express");
const Controller = require("../controllers/category");
const router = express.Router();

router.get("/", Controller.get);
router.post("/", Controller.add);

module.exports = router;
