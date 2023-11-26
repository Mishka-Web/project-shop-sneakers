import { useVisibleMenuStore } from "../store";
import boxImg from "../assets/images/box.png";
import { useNavigate } from "react-router-dom";
import BasketProdCard from "./BasketProdCard";
import { getItems } from "../http/basket-api";
import { useEffect, useState } from "react";

export default function SideMenu() {
	const { isVisible: menuIsVisible, unVisible: menuUnVisible } =
		useVisibleMenuStore();
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getItems({id: 1}).then((data) => setProducts(data));
	}, []);

	return (
		<>
			<div
				className={
					menuIsVisible
						? "fixed z-40 inset-0 bg-[rgba(0,0,0,0.5)] opacity-1 transition-all duration-700"
						: "fixed z-40 inset-0 bg-[rgba(0,0,0,0)] opacity-0 transition-all duration-700 invisible"
				}
				onClick={menuUnVisible}
			></div>
			<aside
				className={
					menuIsVisible
						? "fixed z-50 bg-[#fff] w-[40rem] h-full top-0 right-0 opacity-[1] transition-all duration-700"
						: "fixed z-50 bg-[#fff] w-[40rem] h-full top-0 right-[-50%] opacity-[0] invisible transition-all duration-700"
				}
			>
				<h2 className="text-[2.4rem] font-bold z-30 absolute top-[3.2rem] left-[3rem]">
					Корзина
				</h2>
				{!products ? (
					<div className="flex flex-col justify-center p-[5rem] pt-[9.1rem] h-full">
						<section className="flex flex-col items-center text-center">
							<img
								className="w-[12rem] h-[12rem] object-contain pointer-events-none select-none mb-[2.1rem]"
								src={boxImg}
								alt=""
							/>
							<h3 className="text-[2.2rem] font-semibold">
								Корзина пустая
							</h3>
							<p className="opacity-[0.5] leading-normal mt-[0.9rem]">
								Добавьте хотя бы одну пару
								<br />
								кроссовок, чтобы сделать заказ.
							</p>
							<button
								className="inline-flex items-center justify-center gap-[1.8rem] bg-[#9DD458] hover:bg-[#90c353] transition-colors h-[5.5rem] rounded-[1.8rem] px-[3.1rem] text-[1.6rem] text-[#fff] font-semibold mt-[4.4rem] w-full"
								type="button"
								onClick={() => {
									menuUnVisible();
									navigate("/");
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="14"
									viewBox="0 0 16 14"
									fill="none"
								>
									<path
										d="M14.7144 7L1.00007 7"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M7 13L1 7L7 1"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Вернуться назад
							</button>
						</section>
					</div>
				) : (
					<div className="flex flex-col justify-between p-[3rem] pt-[9.1rem] h-full">
						<div className="flex flex-col gap-[2rem] overflow-y-auto scrollbar-hide">
							{products.map((item, index) => (
								<BasketProdCard key={index} data={item} />
							))}
						</div>
						<div className="flex flex-col gap-[2.4rem]">
							<button
								className="inline-flex items-center justify-center gap-[1.8rem] bg-[#9DD458] hover:bg-[#90c353] transition-colors h-[5.5rem] rounded-[1.8rem] px-[3.2rem] text-[1.6rem] text-[#fff] font-semibold mt-[4.4rem] relative w-full"
								type="button"
							>
								Оформить заказ
								<svg
									className="absolute right-[3rem]"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="14"
									viewBox="0 0 16 14"
									fill="none"
								>
									<path
										d="M1 7H14.7143"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8.71436 1L14.7144 7L8.71436 13"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				)}
			</aside>
		</>
	);
}
