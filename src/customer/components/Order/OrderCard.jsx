import React from 'react';
import {Grid} from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import {useNavigate} from "react-router-dom";
function OrderCard() {
    const navigate = useNavigate()



    return (
        <div onClick={()=>navigate("/account/order/{5}")} className="p-5  shadow-black  hover:shadow-2xl hover:shadow-black">
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
                             alt="" className="w-[5rem] h-[5rem] object-cover object-top"/>
                        <div className="ml-5 space-y-2 text-left">
                            <p className="">Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-70 text-xs font-semibold">Size:M</p>
                            <p className="opacity-70 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                        <span>
                            Delivered On March 17
                        </span>
                        </p>
                        <p className="text-xs">
                            Your Item Has Been Delivered
                        </p>
                    </div>}
                    {false && <p>
                        <span>
                            Expected Delivery On March 17
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    );
}

export default OrderCard;