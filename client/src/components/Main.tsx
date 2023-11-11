import Search from "./Search";
import Products from "./Products";
import IntroSlider from "./IntroSlider";

export default function Main() {
	return (
		<main className="flex flex-col pt-[4.5rem] pb-[7.2rem]">
			<div className="container">
				<IntroSlider />
				<div className="flex flex-col">
					<section className="flex items-start justify-between flex-wrap gap-4">
						<h2 className="text-[3.2rem] font-bold">
							Все кроссовки
						</h2>
						<Search />
					</section>
					<Products />
				</div>
			</div>
		</main>
	);
}
