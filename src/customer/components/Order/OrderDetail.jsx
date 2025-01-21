import React from 'react';
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import {Box, Grid} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
function OrderDetail() {
    return (
        <div className="px:5 lg:px-20">
            <div>
                <h1 className="font-bold text-xl py-10 text-left">Delivery Address</h1>
                <AddressCard/>
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3}/>
            </div>

            <Grid container className="space-y-5">
                {[1,1,1,1,1].map((item)=> <Grid container item className="shadow-xl rounded-md p-5 border hover:shadow-2xl hover:shadow-black"
                                                sx={{alignItems:"center", justifyContent:"space-between"}}>
                    <Grid item xs={6}>
                        <div className="flex flex-row justify-start text-left">
                            <img className="w-[5rem] h-[5rem] object-cover object-top"
                                 src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
                                 alt=""/>
                            <div className="ml-5">
                                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                                <p className="space-x-5 opacity-70 text-sm"><span>Color: pink</span> <span>Size: L</span></p>
                                <p>Seller: linaria</p>
                                <p className="font-bold">₹1099</p>
                            </div>
                        </div>


                    </Grid>
                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontsize:"2rem"}}  className="px-2"/>
                            <span>Rate & Review Product</span>

                        </Box>
                    </Grid>
                </Grid>)}


            </Grid>
        </div>
    );
}

export default OrderDetail;