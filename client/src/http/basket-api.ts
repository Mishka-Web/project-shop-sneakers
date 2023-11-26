import { $inst } from './index';

async function getItems() {
	const { data } = await $inst.get('basket/');
	return data;
}

export { getItems };