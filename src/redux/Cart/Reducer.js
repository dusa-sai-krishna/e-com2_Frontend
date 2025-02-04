import {
	ADD_ITEM_TO_CART_FAILURE,
	ADD_ITEM_TO_CART_REQUEST,
	ADD_ITEM_TO_CART_SUCCESS,
	GET_CART_REQUEST,
	GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE,
	REMOVE_CART_ITEM_REQUEST,
	REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE,
	UPDATE_CART_ITEM_REQUEST,
	UPDATE_CART_ITEM_SUCCESS
} from "./ActionType";
import {GET_USER_FAILURE} from "../Auth/ActionType";

const initialState = {
	cart: null,
	isLoading: false,
	error: null,
	cartItems: [],

}

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_TO_CART_REQUEST:
			return { ...state, isLoading: true, error: null };

		case ADD_ITEM_TO_CART_SUCCESS:
			return {
				...state,
				isLoading: false,
				cartItems: [...state.cartItems, action.payload.cartItems],
			};

		case ADD_ITEM_TO_CART_FAILURE:
			return { ...state, isLoading: false, error: action.payload };

		case GET_CART_REQUEST:
			return { ...state, isLoading: true, error: null };

		case GET_CART_SUCCESS:
			return {
				...state,
				cartItems: action.payload.cartItems,
				isLoading: false,
				cart: action.payload
			};

		case GET_USER_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		case REMOVE_CART_ITEM_REQUEST:
		case UPDATE_CART_ITEM_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case REMOVE_CART_ITEM_SUCCESS:
			return {
				...state,
				deleteCartItem:action.payload,
				isLoading: false,
				delete:true
			};

		case UPDATE_CART_ITEM_SUCCESS:
			return {
				...state,
				updateCartItem:action.payload,
				isLoading: false,
				update:true
			};

		case REMOVE_CART_ITEM_FAILURE:
		case UPDATE_CART_ITEM_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
				update: false,
				delete: false
			};

		default:
			return state;
	}
};
