const User = require('../models/user');

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await User.getAll();
      console.log({ users: data });
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
  },

  async register(req, res, next) {
    try {
      const user = req.body;
      const data = await User.create(user);

      return res.status(201).json({
        success: true,
        message: 'El registro se realizo correctamente',
        data,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err.toString(),
      });
    }
  },
};
