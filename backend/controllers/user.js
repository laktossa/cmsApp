const { compare } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jsonwebtoken");
const { User } = require("../models/index");

class Controller {
  static register = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      await User.create({ email, password });
      res.status(201).json({ msg: "Berhasil" });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { name: "404" };
      }
      if (!compare(password, findUser.password)) {
        throw { name: "404" };
      }
      const access_token = sign({
        id: findUser.id,
      });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Controller;
