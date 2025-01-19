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
import Order from "./customer/components/Order/Order";
import OrderDetail from "./customer/components/Order/OrderDetail";
import {Route, Routes} from "react-router-dom";
import CustomerRouter from "./Routers/CustomerRouter";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/*" element={<CustomerRouter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
