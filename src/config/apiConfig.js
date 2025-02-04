import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";

export const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json"
	}
});

// Add a request interceptor
api.interceptors.request.use(
	(config) => {
		const jwt = localStorage.getItem("jwt");
		if (jwt) {
			console.log("Adding jwt header: ", jwt);
			config.headers["Authorization"] = `Bearer ${jwt}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);



