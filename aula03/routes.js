const express = require('express');
const routes = express.Router();

//Dados
const produtos = [
    {id: 1, nome: 'Suco de laranja', pitros: 0.5, preco: 3},
    {id: 2, nome: 'Suco de mamão', pitros: 0.5, preco: 5},
    {id: 3, nome: 'Suco de pessego', pitros: 0.5, preco: 4}
]

routes.get('/produtos', (req, res) => {
    res.send(produtos);
});

routes.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;

    res.send(produtos[index]);
});

routes.post('/produtos', (req, res) => {
    const produto = req.body;

    produtos.push(produto);

    res.send(produto);
});





module.exports = routes;

