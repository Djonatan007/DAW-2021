//type Number
const primeiroNumero = 3;
const segundoNumero = 7;
const resultadoSoma = primeiroNumero + segundoNumero;
console.log(`${primeiroNumero} + ${segundoNumero} = ${resultadoSoma}`);


//type float - ponto flutuante

const valorFlutuante = 3.2;
const resultadoDivisão = primeiroNumero / valorFlutuante;
console.log(`${primeiroNumero} / ${valorFlutuante} = ${resultadoDivisão}`);
console.log(Math.round(resultadoDivisão * 100) / 100)

//type NaN - não é um número
const texto = 'Materdei';
const resutadoMultiplicacao = texto * segundoNumero;
console.log(`${texto} * ${segundoNumero} = ${resutadoMultiplicacao}`);
