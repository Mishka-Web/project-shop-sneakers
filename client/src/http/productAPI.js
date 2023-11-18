import { $instance } from './index';
import jwtDecode from 'jwt-decode';

export default async function getAll() {
	const { data } = await $instance.get('api/product/');
	localStorage.setItem('token', data.token);
	return jwtDecode(data.token);
}