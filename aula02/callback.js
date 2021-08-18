// 

function inicio(){
    const variavel = 'Inicio da execução';
    console.log(variavel)
};

const init = function(){
    console.log('Incio alternativo')
}

//funcão com parametros com 2 function parameters
function processo(func1, func2){
    func1();

    const variavel = 'Executando o processo';
    console.log(variavel)

    func2();
};

function fim(){
    const variavel = 'Finalizando o processo';
    console.log(variavel)
};

processo(inicio, fim);

//processo(init, fim)