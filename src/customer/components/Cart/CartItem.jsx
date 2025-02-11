import React, {useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {Button, IconButton} from "@mui/material";
import {removeCartItem, updateCartItem} from "../../../redux/Cart/Action";
import {useDispatch} from "react-redux";
function CartItem({cartItem,checkout}) {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(cartItem?.quantity);
    const handleUpdateCartItem = (num) => {

        const data = {
            "quantity": cartItem?.quantity + num,
            "cartItemId": cartItem?.id
        }
        dispatch(updateCartItem(data));
    }

    const handleRemoveCartItem = () => {
       const  data ={
            cartItemId: cartItem?.id}
        dispatch(removeCartItem(data))
    }




        return (
            <>
                <div className="flex items-center text-left">
                    <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                        <img className="w-full h-full object-cover object-top" src={cartItem?.product?.imageUrl}
                             alt=""/>
                    </div>
                    <div className="ml-5 space-y-1">
                        <p className="font-semibold">{cartItem?.product?.title}</p>
                        <p className="opacity-70"> Size: {cartItem?.size}, Color: {cartItem?.product?.color}</p>
                        <p className="opacity-70 mt-2">Seller: {cartItem?.product?.brand}</p>
                        <div className="flex space-x-5 items-center text-gray-900 pt-6">
                            <p className="font-semibold">₹{cartItem?.discountedPrice}</p>
                            <p className="opacity-70 line-through">₹{cartItem?.price}</p>
                            <p className="text-green-600 font-semibold">{cartItem?.discountPercentage}% Off</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton sx={{color: "RGB(145 85 253)"}}  onClick={()=>handleUpdateCartItem(-1)}
                        disabled={cartItem?.quantity<=1 || checkout}>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">{cartItem?.quantity}</span>
                        <IconButton sx={{color: "RGB(145 85 253)"}} onClick={()=>handleUpdateCartItem(1)}  disabled={cartItem?.quantity>10 || checkout}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <Button sx={{color: "RGB(145 85 253)"}} onClick={handleRemoveCartItem} disabled={checkout}>Remove</Button>
                    </div>
                </div>
            </>
        );
    }

export default CartItem;
















