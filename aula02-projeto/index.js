const express = require('express');
const app = express();
app.use(express.json);

app.get('/', (req, res) => {
    res.send('It Working')
})

//rota principal : request query
app.get('/home', (req, res) => {

    const nome = req.query.nome;

    res.send(`Seja bem vindo ${nome}!`)
})

//rota profile: request param
app.get('/profile/:username', (req, res) => {

    const username = req.params.username;

    res.send(`Você está no perfil d@ ${username}!`)
})

//rota login : request body
app.get('/login', (req, res) => {

    const user = req.body;

    console.log('->', username);

    res.send(`Você está no perfil d@ ${user.username}!`);
})


app.listen(3000, () => {
    console.log('Runing in port:3000')
});



