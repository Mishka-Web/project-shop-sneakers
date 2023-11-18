import { $authInstance, $instance } from './index';
import jwtDecode from 'jwt-decode';

async function registration(opts) {
	const { data } = await $instance.post('api/user/reg', { ...opts });
	localStorage.setItem('token', data.token);
	return jwtDecode(data.token);
}

async function login(opts) {
	const { data } = await $instance.post('api/user/login', { ...opts });
	localStorage.setItem('token', data.token);
	return jwtDecode(data.token);
}

async function isAuth() {
	const { data } = await $authInstance.get('api/user/auth');
	localStorage.setItem('token', data.token);
	return jwtDecode(data.token);
}

export {
	registration,
	login,
	isAuth
}