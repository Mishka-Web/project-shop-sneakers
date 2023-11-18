import { $inst } from './index.ts';
import jwtDecode from 'jwt-decode';

export async function getAll() {
	const { data } = await $inst.get('api/product/');
	localStorage.setItem('token', data.token);
	return jwtDecode(data.token);
}