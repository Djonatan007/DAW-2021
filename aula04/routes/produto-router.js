const express = require('express');
const routes = express.Router();
const produtoController = require('../controllers/produto-controller')

routes.get('/produtos', produtoController.index);

routes.get('/produtos/:id', produtoController.show);

routes.post('/produtos', produtoController.create);

module.exports = routes;

