import "tippy.js/dist/tippy.css";
import { IProduct } from "../models";

export default function BasketProdCard({ data }: { data: IProduct }) {
	return (
		<article className="flex p-[2rem] rounded-[2rem] border border-[#e8e8e8] bg-[#fff] will-change-transform transition-all duration-[400ms] hover:border-[#cccccc] min-h-[12rem]">
			<span className="w-[8rem] h-[8rem] mr-[2.1rem] block">
				<img
					className="w-full object-contain"
					src={"http://localhost:5000/" + data.img}
					alt=""
				/>
			</span>
			<div className="flex flex-col flex-grow gap-[0.8rem] mt-[1rem]">
				<h4 className="font-normal">{data.title}</h4>
				<p className="font-normal">
					<b>{data.price} руб.</b>
				</p>
			</div>
			<button className="inline-flex mt-auto ml-[1.2rem]" type="button">
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
						stroke="#DBDBDB"
					/>
					<path
						d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
						fill="#B5B5B5"
					/>
				</svg>
			</button>
		</article>
	);
}
