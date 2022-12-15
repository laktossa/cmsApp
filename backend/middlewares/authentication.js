const { verify } = require("../helpers/jsonwebtoken");
const { User } = require("../models/index");

const authentication = async (req, res, next) => {
  try {
    if (req.headers.access_token) {
      throw { name: "Token Error" };
    }
    const payload = verify(access_token);
    const find = User.findByPk(payload.id);
    if (!find) {
      throw { name: "404" };
    }
    req.user = {
      UserId: payload.id,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
