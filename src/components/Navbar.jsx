import react from "react";
import {navData, socialData} from "../utils/data.jsx";

const Navbar = () => {
	const {items} = navData;

	return (
		<header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-white'>
			<nav className='flex flex-1 justify-between w-full'>
				<h2 className='text-3xl font-bold text-blue-950'>AZ Portofolio</h2>

				<div className='flex flex-1 justify-center items-center max-sm:hidden pr-28 font-semibold'>
					{items.map((nav, index) => {
						return (
							<div className='px-5 cursor-pointer text-gray hover:text-red-700 hover:drop-shadow-xl transition-all' key={index}>
								{nav.name}
							</div>
						)
					})}
				</div>

				<div className='flex items-baseline max-sm:justify-end max-sm:flex-1'>
					<ul className='flex justify-center items-center gap-x-[20px]'>
						{socialData.map((item, index) => {
							return (
								<li key={index}>
									<a href={item.href} target='_blank' rel='noreferrer'>
										<img src={item.icon} alt={item.alt} className='w-7 h-7 mt-1 mr-2' />
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</nav>
		</header>
	)
};

export default Navbar;