const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3333;
const groupRouter = require('./routes/group-router')
const productRouter = require('./routes/product-router')

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('It Working')
})

//demais rotas
app.use('/groups', groupRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Runing in port: ${PORT}`)
});
