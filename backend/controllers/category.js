const { Category } = require("../models/index");

class Controller {
  static get = async (req, res, next) => {
    try {
      const data = await Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  static add = async (req, res, next) => {
    try {
      const { name } = req.body;
      await Category.create({ name });
      res.status(200).json({ msg: "Berhasil" });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = Controller;
