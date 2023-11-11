import ProdCard from "./ProdCard";

export default function Products() {
	return (
		<div className="mt-[3.6rem]">
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(26rem,_1fr))] gap-[4rem]">
				<ProdCard />
			</div>
		</div>
	);
}
