const express = require('express');
const produtoRouter = require('./routes/produto-router');

const app = express();

//middleware
app.use(express.json);
app.use(produtoRouter);

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('It Working')
})

app.listen(PORT, () => {
    console.log(`Runing in port: ${PORT}`)
});