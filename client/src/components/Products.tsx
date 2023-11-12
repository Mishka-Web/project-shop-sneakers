import ProdCard from "./ProdCard";
import products from "../products.json";

export default function Products() {
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
