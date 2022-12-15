const { Item } = require("../models/index");

class Controller {
  static get = async (req, res, next) => {
    try {
      const data = await Item.findAll({
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
    const { name, image, price, CategoryId } = req.body;
    const { UserId } = req.user;

    try {
      await Item.create({ name, image, price, CategoryId, UserId });
      res.status(201).json({ msg: "Berhasil" });
    } catch (error) {
      next(error);
    }
  };
  static edit = async (req, res, next) => {
    const { name, image, price, CategoryId } = req.body;
    const { id } = req.params;
    const { UserId } = req.user;
    try {
      const find = await Item.findByPk(id);
      if (!find) {
        throw { name: "404" };
      }
      await Item.update(
        { name, image, price, CategoryId, UserId },
        { where: { id } }
      );
      res.status(200).json({ msg: "Berhasil" });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = Controller;
