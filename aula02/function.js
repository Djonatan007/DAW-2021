// 

function inicio(){
    const variavel = 'Inicio da execução';
    console.log(variavel)
};

function processo(){
    const variavel = 'Executando o processo';
    console.log(variavel)
};

function fim(){
    const variavel = 'Finalizando o processo';
    console.log(variavel)
};

function run(){
    inicio();

    processo();

    fim();
};

run();