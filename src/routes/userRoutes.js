const usersController = require('../controllers/usersController');

module.exports = (app) => {
  app.get('/api/users/get-all', usersController.getAll);
  app.post('/api/users/create', usersController.register);
};
