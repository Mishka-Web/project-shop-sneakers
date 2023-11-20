import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useUserStore } from "../store";

export default function PurchasesPage() {
	const navigate = useNavigate();
	const { isAuth: userIsAuth } = useUserStore();

	useEffect(() => {
		if (!localStorage.getItem("token")) navigate("/auth");
	}, [navigate, userIsAuth]);

	return (
		<motion.div
			key="purchases-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 1,
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
						{/* {products.map((item) => (
							<ProdCard key={item.id} data={item} />
						))} */}
					</div>
				</div>
			</main>
		</motion.div>
	);
}
