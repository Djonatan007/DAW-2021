import { Brands } from "./components/Brands";
import { Collection } from "./components/Collection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Newsletter } from "./components/Newsletter";
import { Products } from "./components/Products";


function App() {
  return (
    <div>       
      <Header/>
    <main>
    <div className="container">
            <Collection/>
            <Products/>
        </div>
          <Newsletter/>
            <div className="container">
              <Brands/>
            </div>
    </main>
      <Footer/>
    </div>
  );
}

export default App;
