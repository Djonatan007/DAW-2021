import './style.css'

export function Products(){
    return(
        <div className="products">
        <div className="card">
            <img src="assets/images/product1.jpg"/>
            <div className="card-body">
                <h5>Conjunto de casaco e calça preto</h5>
                <div className="details">
                    <div className="star-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="price">
                        <h3>R$:600,00</h3>
                        <p>Em até 10x sem juros</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <img src="assets/images/product2.jpg"/>
            <div className="card-body">
                <h5>Conjunto de casaco e calça jeans</h5>
                <div className="details">
                    <div className="star-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="price">
                        <h3>R$:600,00</h3>
                        <p>Em até 10x sem juros</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <img src="assets/images/product3.jpg"/>
            <div className="card-body">
                <h5>Vestido preto e vermelho </h5>
                <div className="details">
                    <div className="star-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="price">
                        <h3>R$:600,00</h3>
                        <p>Em até 10x sem juros</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}