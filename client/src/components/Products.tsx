import ProdCard from "./ProdCard";
import getProducts from "../http/prod-api";
import { useEffect, useState } from "react";

export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then(data => setProducts(data.rows));
	}, []);

	return (
		<div className="mt-[3.6rem]">
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(26rem,_1fr))] gap-[4rem]">
				{products.map((item, index) => (
					<ProdCard key={index} data={item} />
				))}
			</div>
		</div>
	);
}
