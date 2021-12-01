import { Product } from "../../@types"
import './style.css'

type ProductsProps = {
    items: Array<Product>;
}

export function Products(props: ProductsProps){
    return(
        <div className="products">
        {props.items.map(item => {
            return(
            <div className="card">
            <img src={`assets/images/${item.photo}`}/>
            <div className="card-body">
                <h5>{item.name}</h5>
                <div className="details">
                    
                    <div className="star-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="price">
                        <h3>R$: {item.price}</h3>
                        <p>10 x RS {item.price / 10} Sem juros</p>
                    </div>
                </div>
            </div>
        </div>
        )})}
    </div>
    )
}