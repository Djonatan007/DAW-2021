const express = require('express');
const groupRouter = require('./routes/estado-route');
const productRouter = require('./routes/cidade-route');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`Tá piscando tá gravando`);
});

//Demais rotas
app.use('/estado', groupRouter);

app.use('/cidade', productRouter)

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
    
});