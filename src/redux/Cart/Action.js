import {
	ADD_ITEM_TO_CART_FAILURE,
	ADD_ITEM_TO_CART_REQUEST,
	ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS,
	REMOVE_CART_ITEM_FAILURE,
	REMOVE_CART_ITEM_REQUEST,
	REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS
} from "./ActionType";
import {api} from "../../config/apiConfig";





export const getCart=()=>async(dispatch)=>{

	dispatch({type:GET_CART_REQUEST});

	try{
		const {data} = await api.get(`/api/cart/`);

		dispatch({type:GET_CART_SUCCESS,payload:data});
		console.log("Get Cart Response Received",data);

	}
	catch (error) {
		console.log("Get Cart Error",error);
		dispatch({type:GET_CART_FAILURE,payload:error.response.data})
	}
}







export const addItemToCart=(reqData)=>async(dispatch)=>{

	dispatch({type:ADD_ITEM_TO_CART_REQUEST});

	try{
		const {data} = await api.put(`/api/cartItem/add`,reqData);

		dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data});
		console.log("Add Item Request Response Received",data);

	}
	catch (error) {
		console.log("Add Item Request Error",error);
		dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.response.data})
		console.log("Add cart item failure has been inserted!")
	}
}

export const removeCartItem=(reqData)=>async(dispatch)=>{

	dispatch({type:REMOVE_CART_ITEM_REQUEST});

	try{
		const {data} = await api.delete(`/api/cartItem/id/${reqData.cartItemId}`);

		dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:data});
		console.log("Remove Cart Item Response Received",data);

	}
	catch (error) {
		console.log("Remove Cart Item Error",error);
		dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.response.data})
	}
}

export const updateCartItem=(reqData)=>async(dispatch)=>{

	dispatch({type:UPDATE_CART_ITEM_REQUEST});

	try{
		const {data} = await api.put(`/api/cartItem/`,reqData);

		dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data});
		console.log("Update Cart Item Response Received",data);

	}
	catch (error) {
		console.log("Update Cart Item Error",error);
		dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.response.data})
	}
}

