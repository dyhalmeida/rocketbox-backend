const express = require('express');
const app = express();
const cors = require('cors');
const { resolve } = require('path');

// Conexão com MongoDB
require('./database/index').connection();

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);