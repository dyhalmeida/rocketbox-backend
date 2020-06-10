const express = require('express');
const app = express();
const cors = require('cors');

// Conexão com MongoDB
require('./database/index').connection();

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3333);