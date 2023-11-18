import { $inst } from './index';
// import { jwtDecode } from 'jwt-decode';

export async function getAll() {
	const response = await $inst.get('api/product/');
	return response.data;
}