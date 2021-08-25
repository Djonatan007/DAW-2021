//Dados
const produtos = [
    {id: 1, nome: 'Suco de laranja', pitros: 0.5, preco: 3},
    {id: 2, nome: 'Suco de mamão', pitros: 0.5, preco: 5},
    {id: 3, nome: 'Suco de pesseego', pitros: 0.5, preco: 4}
];

module.exports = {

    index: (req, res)=>{
        return res.json(produtos);
    },
    show:(req, res) => {
        const id = req.params.id;
        const index = id - 1;
    
        res.send(produtos[index]);
    },
    create: (req, res) => {
        const produto = req.body;
    
        produtos.push(produto);
    
        res.send(produto);
    }
};