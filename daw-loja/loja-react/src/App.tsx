import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./@types";
import { Brands } from "./components/Brands";
import { Collection } from "./components/Collection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Newsletter } from "./components/Newsletter";
import { Products } from "./components/Products";

function App() {
  const brands = [
    {alt:"brands1", source:'./assets/images/brand1.png"'},
    {alt:"brands2", source:'./assets/images/brand2.png"'},
    {alt:"brands3", source:'./assets/images/brand3.png"'},
    {alt:"brands4", source:'./assets/images/brand4.png"'},
    {alt:"brands5", source:'./assets/images/brand5.png"'}
  ]
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() =>{

    axios.get('http://localhost:3333/products')
    .then(result => {
      setProducts(result.data)
    })
    .catch(error =>{
      console.log(error);
    })

  }, [])
  return (
    <div>         
      <Header/> 
    <main>
    <div className="container">
            <Collection/>
            <Products items={products}/>
        </div>
          <Newsletter/>
            <div className="container">
              <Brands items={brands}/>
            </div>
    </main>
      <Footer/>
    </div>
  );
}

export default App;
