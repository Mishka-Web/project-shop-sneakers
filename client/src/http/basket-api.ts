import { $inst } from "./index";

async function getItems(opts: object) {
	const { data } = await $inst.post("basket/", { ...opts });
	return data;
}

async function addItem(opts: object) {
	const { data } = await $inst.post("basket/add", { ...opts });
	return data;
}

async function removeItem() {
	const { data } = await $inst.post("basket/:id");
	return data;
}

export { getItems, addItem, removeItem };
