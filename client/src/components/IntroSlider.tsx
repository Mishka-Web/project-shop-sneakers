import SwiperCore from "swiper";
import { Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import introBg from "../assets/images/intro.png";
import brandImg from "../assets/images/brand.png";

SwiperCore.use([Keyboard]);

export default function IntroSlider() {
	return (
		<div className="mb-[3.9rem]">
			<Swiper
				modules={[Mousewheel]}
				spaceBetween={64}
				slidesPerView={1}
				speed={1200}
				mousewheel
				className="overflow-hidden rounded-[2rem] will-change-transform"
			>
				<SwiperSlide>
					<div className="flex bg-[#F4EFE9] relative">
						<img
							className="top-[1.6rem] left-[2rem] w-[12.6rem] absolute z-20"
							src={brandImg}
							alt=""
						/>
						<div className="flex flex-col justify-center items-start flex-[0_1_35%] p-[3.2rem] pl-[8.4rem]">
							<h2 className="text-[5rem] font-bold mb-[1.8rem]">
								<span className="text-[#8BB43C]">Stan Smith</span>,<br />Forever!
							</h2>
							<button className="inline-flex items-center justify-center font-bold bg-[#A5D364] rounded-[11rem] text-[1.6rem] text-[#fff] h-[4.709rem] min-w-[21rem] uppercase mr-auto" type="button">купить</button>
						</div>
						<img className="flex-[0_1_65%] w-auto min-h-[30rem] object-cover" src={introBg} alt="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex bg-[#F4EFE9] relative">
						<img
							className="top-[1.6rem] left-[2rem] w-[12.6rem] absolute z-20"
							src={brandImg}
							alt=""
						/>
						<div className="flex flex-col justify-center items-start flex-[0_1_35%] p-[3.2rem] pl-[8.4rem]">
							<h2 className="text-[5rem] font-bold mb-[1.8rem]">
								<span className="text-[#8BB43C]">Stan Smith</span>,<br />Forever!
							</h2>
							<button className="inline-flex items-center justify-center font-bold bg-[#A5D364] rounded-[11rem] text-[1.6rem] text-[#fff] h-[4.709rem] min-w-[21rem] uppercase mr-auto" type="button">купить</button>
						</div>
						<img className="flex-[0_1_65%] w-auto min-h-[30rem]" src={introBg} alt="" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
