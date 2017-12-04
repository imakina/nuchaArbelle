const combosController = require('../controllers').combos;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to API!',
  }));

  app.post('/api/combos', combosController.create);
};