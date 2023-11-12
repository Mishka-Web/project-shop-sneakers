import { useState } from "react";
import { IProduct } from "../models";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function ProdCard({ data }: IProduct) {
	const [bookmark, setBookmark] = useState(!!data.isActive);
	const [added, setAdded] = useState(false);

	const bookmarkClass = bookmark
		? "flex items-center justify-center p-[0.8rem] border border-[#EAEAEA] rounded-[0.7rem] absolute top-[0.8rem] left-0 z-30 transition-all bg-[#FEF0F0] border-[#fff] fill-[#FF8585] stroke-[#FF8585]"
		: "flex items-center justify-center p-[0.8rem] border border-[#EAEAEA] rounded-[0.7rem] absolute top-[0.8rem] left-0 z-30 hover:border-[#e1e1e1] hover:stroke-[#c4c4c4] transition-all duration-[400ms] stroke-[#EAEAEA] fill-[#fff]";

	return (
		<article className="pt-[2rem] pb-[3.4rem] pr-[2.9rem] pl-[3rem] border border-[#F3F3F3] rounded-[3rem] bg-[#fff] will-change-transform transition-all duration-[400ms] hover:border-[#F8F8F8] hover:shadow-[0_1.4rem_3rem_0_rgba(0,0,0,0.05)] hover:translate-y-[-1rem]">
			<div className="relative">
				<Tippy content={<span>{bookmark ? "Убрать" : "В закладки"}</span>} placement="right">
					<button
						className={bookmarkClass}
						type="button"
						onClick={() => setBookmark(!bookmark)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
						>
							<path
								d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z"
								stroke-width="1.2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</Tippy>
				<img
					className="w-[92.5%] mx-auto object-contain object-center h-[18.5rem]"
					src={data.image.src}
					alt={data.image.alt}
					title={data.image.title}
				/>
			</div>
			<section className="flex flex-col gap-[1.4rem] mt-[1.4rem]">
				<h4 className="text-[1.4rem]">{data.title}</h4>
				<div className="flex justify-between items-end flex-wrap gap-2">
					<div className="flex flex-col gap-[0.2rem]">
						<span className="text-[#BDBDBD] text-[1.1rem] font-medium uppercase">
							Цена:
						</span>
						<span className="font-bold">{data.cost}</span>
					</div>
					{added ? (
						<button
							className="flex items-center justify-center w-[3.2rem] h-[3.2rem] rounded-[0.8rem] bg-gradient-lime"
							type="button"
							onClick={() => setAdded(!added)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
							>
								<g clip-path="url(#clip0_60_202)">
									<g filter="url(#filter0_d_60_202)">
										<path
											d="M9.6567 1.62069C9.83936 1.43633 10.0876 1.33177 10.3471 1.32986C10.6066 1.32795 10.8563 1.42884 11.0416 1.61049C11.227 1.79214 11.3329 2.03977 11.3362 2.29927C11.3395 2.55877 11.24 2.80903 11.0594 2.99536L5.83271 9.52936C5.74292 9.62603 5.63456 9.70362 5.51412 9.75749C5.39368 9.81136 5.26362 9.84041 5.1317 9.8429C4.99979 9.84539 4.86872 9.82127 4.74633 9.77198C4.62394 9.72269 4.51274 9.64924 4.41937 9.55602L0.954039 6.09202C0.76989 5.90779 0.666472 5.65794 0.666534 5.39746C0.666597 5.13697 0.770135 4.88717 0.954372 4.70302C1.13861 4.51888 1.38845 4.41546 1.64894 4.41552C1.90943 4.41558 2.15922 4.51912 2.34337 4.70336L5.08404 7.44469L9.6307 1.65136C9.63897 1.64082 9.64787 1.6308 9.65737 1.62136L9.6567 1.62069Z"
											fill="white"
										/>
									</g>
								</g>
								<defs>
									<filter
										id="filter0_d_60_202"
										x="0.666534"
										y="1.32983"
										width="10.6698"
										height="10.5132"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood
											flood-opacity="0"
											result="BackgroundImageFix"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dy="2" />
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
										/>
										<feBlend
											mode="normal"
											in2="BackgroundImageFix"
											result="effect1_dropShadow_60_202"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_dropShadow_60_202"
											result="shape"
										/>
									</filter>
									<clipPath id="clip0_60_202">
										<rect
											width="10.6667"
											height="10.6667"
											fill="white"
											transform="translate(0.666718 0.666687)"
										/>
									</clipPath>
								</defs>
							</svg>
						</button>
					) : (
						<Tippy content={<span>В корзину</span>} placement="bottom">
							<button
								className="flex"
								type="button"
								onClick={() => setAdded(!added)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
								>
									<rect
										x="0.5"
										y="0.5"
										width="31"
										height="31"
										rx="7.5"
										fill="white"
										stroke="#F2F2F2"
									/>
									<path
										d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
										fill="#D3D3D3"
									/>
								</svg>
							</button>
						</Tippy>
					)}
				</div>
			</section>
		</article>
	);
}
