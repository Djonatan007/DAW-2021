// typeArray - array de valores

const vetor = ["Banana", "Maça", "Pessego"];

//adiciona um valor ao array
vetor.push("Abacate");

console.log(vetor);

//vetor de objetos
const frutas = [
    {nome: 'Banana', paisOrigem: 'Brasil'},
    {nome: 'Maça', paisOrigem: 'Argentina'},
    {nome: 'Pessego', paisOrigem: 'Chilê'}
];

console.table(frutas)

console.log(frutas[1])

console.log(frutas[1].paisOrigem)



