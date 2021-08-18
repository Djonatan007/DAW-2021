const express = require('express');
const routes = require('./routes');

const app = express();

//middleware
app.use(express.json);
app.use(routes);

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('It Working')
})

app.listen(PORT, () => {
    console.log(`Runing in port: ${PORT}`)
});