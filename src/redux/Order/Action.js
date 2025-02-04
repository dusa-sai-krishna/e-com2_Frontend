import {
	CREATE_ORDER_FAILURE,
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE,
	GET_ORDER_BY_ID_REQUEST,
	GET_ORDER_BY_ID_SUCCESS
} from "./ActionType";
import {api} from "../../config/apiConfig";

export const createOrder=(reqData)=>async(dispatch)=>{
	dispatch({type:CREATE_ORDER_REQUEST});
	try {

		const {data} = await api.post(`/api/orders/`,reqData.address);

		if(data.id){
			reqData.navigate({search:`stop=3&order_id=${data.id}`});
		}
		console.log("Create Order Response Received",data);
		dispatch({type:CREATE_ORDER_SUCCESS,payload:data});

	} catch (error) {
		console.log("Create Order Error",error);
		dispatch({type:CREATE_ORDER_FAILURE,payload:error.response.data})
	}
}

export const getOrderByID=(reqData)=>async(dispatch)=>{
	dispatch({type:GET_ORDER_BY_ID_REQUEST});
	try {

		const {data} = await api.post(`/api/orders/${reqData.orderId}`);

		console.log("Get Order By ID Response Received",data);
		dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data});

	} catch (error) {
		console.log("GET Order By ID Error",error);
		dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:error.response.data})
	}
}
