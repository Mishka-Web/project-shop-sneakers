import axios from 'axios';

const $instance = axios.create({
	baseURL: "http://localhost:5000/"
});

const $authInstance = axios.create({
	baseURL: "http://localhost:5000/"
});

const interceptor = config => { return config.headers.authorization = `Bearer ${localStorage.getItem('token')}` }

$authInstance.interceptors.request.use(interceptor);

export {
	$instance,
	$authInstance
}