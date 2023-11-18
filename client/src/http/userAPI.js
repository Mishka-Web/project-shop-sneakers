import { $instance } from './index';

async function registration(opts) {
	return await $instance.post('api/user/reg', {...opts});
}
async function login(opts) {
	return await $instance.post('api/user/login', {...opts});
}
async function isAuth() {
	return await $instance.post('api/user/auth');
}

export {
	registration,
	login,
	isAuth
}