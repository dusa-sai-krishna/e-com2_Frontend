import {
	FIND_PRODUCT_BY_ID_FAILURE,
	FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS,
	FIND_PRODUCTS_FAILURE,
	FIND_PRODUCTS_REQUEST,
	FIND_PRODUCTS_SUCCESS
} from "./ActionType";
import {api} from "../../config/apiConfig";



export const findProducts=(reqData)=> async (dispatch)=>{

	dispatch({type:FIND_PRODUCTS_REQUEST});
	const {color,size,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=reqData

	try {
	const {data} = await api.get(`/api/products?color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}
	&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

	console.log("Product request response received",data);
	dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})

	} catch (error) {
		console.log("Product request error",error);
		dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.response.data})
	}
}

export const findProductById=(reqData)=> async (dispatch)=>{

	dispatch({type:FIND_PRODUCT_BY_ID_REQUEST});
	const productId = reqData.productId

	try {
		const {data} = await api.get(`/api/products/id/${productId}`);

		console.log("Find Product By Id response received",data);
		dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})

	} catch (error) {
		console.log("Product request error",error);
		dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.response.data})
	}
}

// export const addProduct=(reqData)=> async (dispatch)=>{
//
// 	dispatch({type:ADD_PRODUCT_REQUEST});
//
// 	try {
// 		const {data} = await api.post(`/api/products/`,reqData);
//
// 		console.log("Add Product response received",data);
// 		dispatch({type:ADD_PRODUCT_SUCCESS,payload:data})
//
// 	} catch (error) {
// 		console.log("Add Product request error",error);
// 		dispatch({type:ADD_PRODUCT_FAILURE,payload:error.response.data})
// 	}
// }




