import imgBrands1 from "../../assets/images/brand1.png"
import imgBrands2 from "../../assets/images/brand2.png"
import imgBrands3 from "../../assets/images/brand3.png"
import imgBrands4 from "../../assets/images/brand4.png"
import imgBrands5 from "../../assets/images/brand5.png"
import './style.css'

export function Brands(){
    return(
        <div className="brands">
        <ul>
            <li><img src={imgBrands1}/></li>
            <li><img src={imgBrands2}/></li>
            <li><img src={imgBrands3}/></li>
            <li><img src={imgBrands4}/></li>
            <li><img src={imgBrands5}/></li>
        </ul>
    </div>
    )
}