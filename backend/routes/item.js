const express = require("express");
const Controller = require("../controllers/item");
const router = express.Router();

router.get("/", Controller.get);
router.post("/", Controller.add);
router.put("/", Controller.edit);

module.exports = router;
