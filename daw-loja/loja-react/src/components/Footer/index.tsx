import './style.css'

export function Footer(){
    return(
        <footer>
        <div className="container row">
            <div className="col">
                <h5>Contato</h5>
                <ul>
                    <li>+55 (46)99909-9999</li>
                    <li>Rua Anchieta</li>
                    <li>Pato Branco PR</li>
                </ul>
            </div>
            <div className="col">
                <h5>Institucional</h5>
                <ul>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Nossa loja</a></li>
                    <li><a href="#">Trabalhe conosco</a></li>
                    <li><a href="#">Parceiros e fornecedores</a></li>
                </ul>
            </div>
            <div className="col">
                <h5>Atendimento</h5>
                <ul>
                    <li><a href="#">Atendimentos</a></li>
                    <li><a href="#">Meus pedidos</a></li>
                    <li><a href="#">Devoluções</a></li>
                    <li><a href="#">Assistencia técnica</a></li>
                    <li><a href="#">Politica de privacidade</a></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}