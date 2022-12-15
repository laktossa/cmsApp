const { History } = require("../models/index");

class Controller {
  static get = async (req, res, next) => {
    try {
      const data = await History.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Controller;
