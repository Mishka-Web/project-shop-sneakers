import axios from "axios";

const $inst = axios.create({
	baseURL: "http://localhost:5000/",
});

const $authInstance = axios.create({
	baseURL: "http://localhost:5000/",
});

$authInstance.interceptors.request.use(
	async (config) => {
		axios.defaults.headers.authorization = `Bearer ${localStorage.getItem(
			"token"
		)}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export { $inst, $authInstance };
