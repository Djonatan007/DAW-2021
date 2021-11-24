import './style.css'

export function Newsletter(){
    return(
        <div className="newsletter">
        <div className="container">
            <h2>Newsletter</h2>
            <p className="fw-light">Assine nossa Newsletter para receber atualização sobre ofertas especiais, novos produtos ou informações de desconto!</p>
            <form>
                <input className="form-control form-control-lg" type="text" placeholder="Informe o seu e-mail"/>
                <button className="btn btn-primary btn-lg">Inscreva-se</button>
            </form>
        </div>
    </div>
    )
}