const exibeMensagem = () => {

    var mensagemForaIF = 'Brasil';

    if (true) {
        var mensageDentroIF = 'Argentina'
        console.log(mensageDentroIF)
    }

    console.log(mensagemForaIF)
    console.log(mensageDentroIF)
}

exibeMensagem();

const exibeMensagemLet = () => {

    let mensagemForaIF = 'Brasil';

    if (true) {
        let mensageDentroIF = 'Argentina'
        console.log(mensageDentroIF)
    }

    console.log(mensagemForaIF)
    console.log(mensageDentroIF)
}

exibeMensagemLet();