import React, {useEffect} from 'react';
import AddressCard from "./AddressCard";
import CartItem from "../Cart/CartItem";
import {Button} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOrderByID} from "../../../redux/Order/Action";
import {getCart} from "../../../redux/Cart/Action";

function OrderSummary() {
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);
    const orderId =Number( querySearch.get("orderId"))
    const {order} = useSelector(store=>store);
    const {cart} = useSelector(store=>store);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrderByID({"orderId":orderId}))
    }, [orderId]);


    //default render
    useEffect(() => {
        dispatch(getCart())
    }, []);

    useEffect(() => {
        dispatch(getCart())
    }, [cart.updateCartItem,cart.deleteCartItem]);


    return (
        <div>
            <div className="p-5 shadow-lg rounded-s-md border">
                <AddressCard/>
            </div>
            <div className="lg:grid grid-cols-3  relative text-left">
                <div className="col-span-2">
                    {order.order?.orderItems.map((cartItem) => <CartItem cartItem={cartItem} />)}

                </div>
                {/*Price, discount and Checkout Card*/}
                <div className="px-5 sticky top-0  h-[100vh] mt-5 lg:mt-0">
                    <div className="border">
                        <p className="uppercase font-bold opacity-70 pb-4">Price Details</p>
                        <br/>
                        <div className="space-y-3 font-semibold mb-10">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>₹4697</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Discount</span>
                                <span className="text-green-600">-₹469</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Delivery Charges</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Total Amount</span>
                                <span className="text-green-600">₹`1278</span>
                            </div>
                        </div>
                        <Button variant="contained" className="w-full mt-5"
                                sx={{px: "2.5rem", py: "1rem", bgcolor: "#9155fd"}}>
                            Checkout
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OrderSummary;