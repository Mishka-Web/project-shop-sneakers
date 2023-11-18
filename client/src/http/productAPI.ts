import { $inst } from "./index";

export default async function getProducts() {
	const { data } = await $inst.get("api/product/");
	return data;
}
