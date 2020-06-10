const { Router } = require('express');
const routes = Router();

const HomeController = require('./controllers/home');
routes.get('/', HomeController.index);


module.exports = routes;