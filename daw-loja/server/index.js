const express = require('express');
const app = express();
const PORT = 3333;
const groupRouter = require('../routes/group-router')

app.use(express.json);

app.get('/', (req, res) => {
    res.send('It Working')
})

//demais rotas
app.use('/groups', groupRouter);

app.listen(PORT, () => {
    console.log(`Runing in port: ${PORT}`)
});
