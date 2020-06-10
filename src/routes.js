const { Router } = require('express');
const routes = Router();

const HomeController = require('./controllers/homeController');
routes.get('/', HomeController.index);

const BoxController = require('./controllers/boxController');
routes.post('/box', BoxController.store);

module.exports = routes;