import React from 'react';
import AddressCard from "./AddressCard";
import CartItem from "../Cart/CartItem";
import {Button} from "@mui/material";

function OrderSummary(props) {
    return (
        <div>
            <div className="p-5 shadow-lg rounded-s-md border">
                <AddressCard/>
            </div>
            <div className="lg:grid grid-cols-3  relative text-left">
                <div className="col-span-2">
                    {[1, 1, 1, 1].map((item) => <CartItem/>)}

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