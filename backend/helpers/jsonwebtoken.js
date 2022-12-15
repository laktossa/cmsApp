const jwt = require("jsonwebtoken");
const SECRET_KEY = "secret";

const sign = (payload) => jwt.sign(payload, SECRET);
const verify = (token) => jwt.verify(token, SECRET);

module.exports = { sign, verify };
