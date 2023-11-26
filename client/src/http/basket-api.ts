import { $authInstance, $inst } from "./index";

async function getItems(id: number) {
	const { data } = await $authInstance.get(`basket/:${id}`);
	return data;
}

async function addItem() {
	const { data } = await $inst.post("basket/");
	return data;
}

async function removeItem() {
	const { data } = await $inst.post("basket/:id");
	return data;
}

export { getItems, addItem, removeItem };
