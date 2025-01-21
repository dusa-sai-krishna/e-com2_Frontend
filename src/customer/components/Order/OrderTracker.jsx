import React, {useState} from 'react';
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Step from "@mui/material/Step";

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
]

function OrderTracker({activeStep}) {


    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>

                {steps.map((label)=><Step>
                    <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
                </Step>)}

            </Stepper>
        </div>
    );
}

export default OrderTracker;