// 

//funcão com parametros com 2 function parameters
const processo = (func1, func2) =>{
    func1();

    const variavel = 'Executando o processo';
    console.log(variavel)

    func2();
};

processo(()=>{

}, ()=>{

});
