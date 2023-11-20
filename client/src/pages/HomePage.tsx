import Search from "../components/Search";
import Products from "../components/Products";
import IntroSlider from "../components/IntroSlider";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function HomePage() {
	return (
		<motion.div
			key="home-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 1,
			}}
		>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<main className="flex flex-col pt-[4.5rem] pb-[7.2rem]">
				<div className="container">
					<IntroSlider />
					<div>
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
		</motion.div>
	);
}
