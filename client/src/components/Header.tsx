import logo from '../assets/images/logo.png';

export default function Header() {
	return (
		<>
			<header>
				<div className="container">
					<div className="flex items-center gap-[1.6rem]">
						<img className='w-[4rem] object-contain' src={logo} alt="" />
					</div>
				</div>
			</header>
		</>
	);
}
