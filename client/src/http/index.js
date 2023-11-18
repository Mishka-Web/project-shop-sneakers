import axios from 'axios';

const { $inst, $authInstance } = axios.create({
	baseURL: "http://localhost:5000/"
});

const interceptor = config => { return config.headers.authorization = `Bearer ${localStorage.getItem('token')}` }

$authInstance.interceptors.request.use(interceptor);

export {
	$inst,
	$authInstance
}