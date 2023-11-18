import ProdCard from "./ProdCard";
// import products from "../products.json";
import { getAll } from "../http/productAPI.js";
import { useEffect, useState } from "react";

export default function Products() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getAll.then((data) => setProducts(data));
	});

	return (
		<div className="mt-[3.6rem]">
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(26rem,_1fr))] gap-[4rem]">
				{products.map((item) => (
					<ProdCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
}
