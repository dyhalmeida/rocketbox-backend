const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = Router();

const HomeController = require('./controllers/homeController');
routes.get('/', HomeController.index);

const BoxController = require('./controllers/boxController');
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

const FileController = require('./controllers/fileController');
routes.post('/boxes/:id/files',  multer(multerConfig).single('file') ,FileController.store);

module.exports = routes;