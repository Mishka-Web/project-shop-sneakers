import { useState } from "react";
import boxImg from "../assets/images/box.png";

export default function SideMenu() {
	const [isVisible, setIsVisible] = useState(false);

	if (isVisible) {
		return (
			<>
				<div
					className="fixed z-40 inset-0 bg-[rgba(0,0,0,0.5)]"
					onClick={() => setIsVisible(!isVisible)}
				></div>
				<aside className="fixed z-50 bg-[#fff] w-[38.5rem] h-full top-0 right-0">
					<h2 className="text-[2.4rem] font-bold z-30 absolute top-[3.2rem] left-[3rem]">
						Корзина
					</h2>
					<div className="flex flex-col justify-center p-[5rem] h-full">
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
								className="inline-flex items-center justify-center gap-[1.8rem] bg-[#9DD458] h-[5.5rem] rounded-[1.8rem] px-[3.1rem] text-[1.6rem] text-[#fff] font-semibold mt-[4.4rem] w-full"
								type="button"
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
				</aside>
			</>
		);
	}
}
