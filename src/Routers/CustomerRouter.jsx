import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../customer/pages/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetail from "../customer/components/Product/ProductDetail";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetail from "../customer/components/Order/OrderDetail";

function CustomerRouter() {
	return (
		<div>
			<div>
				<Navigation/>
			</div>
			<Routes>
				<Route path="/login" element={<HomePage/>}></Route>
				<Route path="/register" element={<HomePage/>}></Route>
				<Route path="/" element={<HomePage/>}></Route>
				<Route path="/cart" element={<Cart/>}></Route>
				<Route path=":lavelOne/:lavelTwo/:lavelThree" element={<Product/>}></Route>
				<Route path="/product/:productId" element={<ProductDetail/>}>"></Route>
			{/*	Try to observe URl for any product page, it contains three levels*/}
				<Route path="/checkout " element={<Checkout/>}></Route>
				<Route path="/account/order" element={<Order/>}></Route>
				<Route path="/account/order/:orderId" element={<OrderDetail/>}></Route>
			</Routes>
			<div>
				<Footer/>
			</div>
		</div>
	);
}

export default CustomerRouter;