import { Helmet } from "react-helmet";
import ProdCard from "../components/ProdCard";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function PurchasesPage() {
	return (
		<motion.div
			key="purchases-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 0.75,
			}}
		>
			<Helmet>
				<title>Мои покупки</title>
			</Helmet>
			<main className="flex flex-col pt-[4.5rem] pb-[7.2rem]">
				<div className="container">
					<div className="flex items-center gap-[2.1rem] mb-[4rem]">
						<NavLink className={"flex"} to={"/"}>
							<button className="flex" type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="35"
									height="35"
									viewBox="0 0 35 35"
									fill="none"
								>
									<rect
										x="0.5"
										y="0.5"
										width="34"
										height="34"
										rx="7.5"
										fill="white"
										stroke="#F2F2F2"
									/>
									<path
										d="M19 22L14 17L19 12"
										stroke="#C8C8C8"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
						</NavLink>
						<h2 className="text-[3.2rem] font-bold">Мои покупки</h2>
					</div>
					<div className="grid grid-cols-[repeat(auto-fill,_minmax(26rem,_1fr))] gap-[4rem]">
						{products.map((item) => (
							<ProdCard key={item.id} data={item} />
						))}
					</div>
				</div>
			</main>
		</motion.div>
	);
}

const products = [
	{
		id: 4,
		title: "Кроссовки Puma X Aka Boku Future Rider",
		cost: "8 999 руб.",
		image: {
			src: "/src/assets/images/sneakers/4.png",
			alt: "Кроссовки Puma X Aka Boku Future Rider",
			title: "Кроссовки Puma X Aka Boku Future Rider",
		},
	},
	{
		id: 6,
		title: "Мужские Кроссовки Nike Kyrie 7",
		cost: "11 299 руб.",
		image: {
			src: "/src/assets/images/sneakers/6.png",
			alt: "Мужские Кроссовки Nike Kyrie 7",
			title: "Мужские Кроссовки Nike Kyrie 7",
		},
	},
	{
		id: 8,
		title: "Мужские Кроссовки Nike LeBron XVIII",
		cost: "16 499 руб.",
		image: {
			src: "/src/assets/images/sneakers/8.png",
			alt: "Мужские Кроссовки Nike LeBron XVIII",
			title: "Мужские Кроссовки Nike LeBron XVIII",
		},
	},
];
