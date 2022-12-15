const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const itemRouter = require("./user");
const categoryRouter = require("./category");
const authentication = require("../middlewares/authentication");

app.use("/", userRouter);

app.use(authentication);

app.use("/item", itemRouter);
app.use("/category", categoryRouter);

module.exports = router;
