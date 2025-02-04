import { configureStore } from '@reduxjs/toolkit'
import {authReducer} from "./Auth/Reducer";
import {customerProductReducer} from "./Product/Reducer";
import {cartReducer} from "./Cart/Reducer";
import {orderReducer} from "./Order/Reducer";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		product: customerProductReducer,
		cart: cartReducer,
		order: orderReducer
	},
})