import React, {useEffect} from 'react';
import CartItem from "./CartItem";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../../redux/Cart/Action";

function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart} = useSelector(store=>store);


    const handleCheckout = () => {
        navigate(`/checkout?step=2`)
    }

 //default render
    useEffect(() => {
        dispatch(getCart())
    }, []);

    useEffect(() => {
        dispatch(getCart())
    }, [cart.updateCartItem,cart.deleteCartItem]);


    return (
        <>
            <div className="lg:grid grid-cols-3 lg:px-16 relative text-left">
                <div className="col-span-2">
                    {cart.cartItems?.map((item)=><CartItem cartItem={item} checkout={false}/>)}

                </div>
                {/*Price, discount and Checkout Card*/}
                <div className="px-5 sticky top-0  h-[100vh] mt-5 lg:mt-0">
                    <div className="border">
                        <p className="uppercase font-bold opacity-70 pb-4">Price Details</p>
                        <br/>
                        <div className="space-y-3 font-semibold mb-10">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>₹{cart.cart?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Discount</span>
                                <span className="text-green-600">-₹{cart.cart?.discount}</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Delivery Charges</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Total Amount</span>
                                <span className="text-green-600">₹{cart.cart?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant="contained"  className="w-full mt-5" sx={{px:"2.5rem",py:"1rem",bgcolor:"#9155fd"}}>
                            Checkout
                        </Button>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Cart;







