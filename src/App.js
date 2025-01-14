import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/pages/HomePage";
import HomeSectionCarousel from "./customer/components/HomeSectionCarousel/HomeSectionCarousel";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetail from "./customer/components/Product/ProductDetail";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Navigation />
        <div>
          {/*<HomePage />*/}
          {/*<Product/>*/}
          {/*<ProductDetail/>*/}
          {/*<Cart/>*/}
          <Checkout/>
          <Footer />
        </div>
    </div>
  );
}

export default App;
