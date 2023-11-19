import { $inst } from "./index";

export default async function getProducts() {
	const { data } = await $inst.get("product/");
	return data;
}
