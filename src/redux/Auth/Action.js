import axios from "axios";

import {
	GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS, LOGOUT,
	REGISTER_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS
} from "./ActionType";
import {API_BASE_URL} from "../../config/apiConfig";



const registerRequest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error});

// place jwt as null
// localStorage.setItem("jwt",null);



export const register = (userData)=> async (dispatch)=> {

	dispatch(registerRequest());
	try {
		const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);

		console.log("Received Register response",response.data)
		dispatch(registerSuccess());

	} catch (error) {
		console.log("error",error.message)
		console.log(" Register response",error.response)
		dispatch(registerFailure(error.response.data));
	}
}


const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error});





export const login = (userData)=> async (dispatch)=> {
	dispatch(loginRequest());
	try {
		const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);

		const user = response.data;
		if(user.jwt){
			localStorage.setItem("jwt", user.jwt);
			console.log("Inserted jwt",localStorage.getItem("jwt"))
		}
		console.log("Recieved login response ",user)
		dispatch(loginSuccess(user.jwt));
	} catch (error) {
		console.log(" Login error",error.message)
		console.log("Login response",error.response)
		dispatch(loginFailure(error.response.data));
	}
}


const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error});



export const getUser = (jwt)=> async (dispatch)=> {
	dispatch(getUserRequest());
	try {

		const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		});
		const user = response.data;
		console.log("Received User Request",user)
		dispatch(getUserSuccess(user));
	} catch (error) {
		console.log(" getUser error",error.message)
		console.log("getUser response",error.response)
		console.log("getUse jwt:",jwt)
		dispatch(getUserFailure(error.response.data));
	}
}

export const logout = () => (dispatch) => {
	console.log("Logout clicked!!!.")
	dispatch({type: LOGOUT, payload: null});
	localStorage.clear();
}
