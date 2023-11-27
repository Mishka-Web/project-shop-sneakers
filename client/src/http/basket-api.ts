import { $inst } from "./index";

async function getBasket(opts: object) {
	const { data } = await $inst.post("basket/", { ...opts });
	return data;
}

async function getBasketProduct(opts: object) {
	const { data } = await $inst.post("basket/basket-product", { ...opts });
	return data;
}

async function getProducts(opts: object) {
	const { data } = await $inst.post("basket/product", { ...opts });
	return data;
}

export { getBasket, getBasketProduct, getProducts };
