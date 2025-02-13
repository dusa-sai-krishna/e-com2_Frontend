import {
	CREATE_PAYMENT_FAILURE,
	CREATE_PAYMENT_REQUEST,
	UPDATE_PAYMENT_FAILURE,
	UPDATE_PAYMENT_REQUEST
} from "./ActionType";
import {api} from "../../config/apiConfig";

export const createPayment = (orderId) => async (dispatch)=>{

	dispatch({type:CREATE_PAYMENT_REQUEST});

	try{
		const {data} = await api.post(`/api/payment/${orderId}`);
		console.log("Payment Response Received",data);
		if(data.payment_link_url){
			window.location.href=data.payment_link_url;//for redirecting to success page
		}
	}
	catch (e) {
		console.log("Payment Error Received",e);
		dispatch({type:CREATE_PAYMENT_FAILURE,payload:e.message})
	}
}

export const updatePayment = (reqData) => async (dispatch)=>{

	console.log("Payment Action.js updatePayment reqData",reqData);

	dispatch({type:UPDATE_PAYMENT_REQUEST});

	try{
		const {data} = await api.get(`/api/payment?paymentId=${reqData.paymentId}&orderId=${reqData.orderId}`);
		console.log("Update Payment Response Received",data);

	}
	catch (e) {
		console.log("Update Payment Error Received",e);
		dispatch({type:UPDATE_PAYMENT_FAILURE,payload:e.message})
	}
}


