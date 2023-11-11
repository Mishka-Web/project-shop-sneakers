import logo from "../assets/images/logo.png";

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className="flex items-center h-[12.8rem]">
					<div className="flex items-center gap-[1.6rem]">
						<img
							className="w-[4rem] h-[4rem] object-contain"
							src={logo}
							alt="Sneakers"
							title="Sneakers"
						/>
						<div className="flex flex-col">
							<h1 className="text-[2rem] font-bold uppercase">
								react sneakers
							</h1>
							<h3 className="text-[#9D9D9D]">
								Магазин лучших кроссовок
							</h3>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
