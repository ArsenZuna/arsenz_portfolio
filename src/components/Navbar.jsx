import react from "react";
import { Link } from 'react-scroll';
import {navData, socialData} from "../utils/data.jsx";

const Navbar = () => {
	const {items} = navData;

	return (
		<header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-white'>
			<nav className='flex flex-1 justify-between w-full'>
				<h2 className='text-3xl font-bold text-blue-950 ml-2'>AZ Portfolio</h2>

				<div className='flex flex-1 justify-center items-center max-sm:hidden pr-28 font-semibold'>
					{items.map((nav, index) => {
						return (
							<Link
								key={index}
								to={nav.href}  // Set the target section's ID as the 'to' prop
								smooth={true}   // Enable smooth scrolling
								duration={500}  // Set the scroll duration in milliseconds
								spy={true}      // Automatically add the "active" class when the section is in view
								offset={-100}   // Optional: adjust the scroll position if you have a fixed header
								className='px-5 cursor-pointer text-gray hover:text-red-700 hover:drop-shadow-xl transition-all' >
								{nav.name}
							</Link>
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