import react from "react";
import {socialData} from "../utils/data.jsx";

const Footer = () => {
	return (
		<footer className='w-full pt-5 bg-cyan-700'>
			<div className='container mx-auto flex flex-1 justify-center items-center pb-2'>
				<ul className='flex justify-center items-center gap-x-[20px]'>
					{socialData.map((item, index) => {
						return (
							<li key={index}>
								<a href={item.href} target='_blank' rel='noreferrer'>
									<img src={item.icon} alt={item.alt} className='w-7 h-7 mr-1' />
								</a>
							</li>
						)
					})}
				</ul>
			</div>
			<p className='flex flex-1 justify-center items-center font-semibold text-white pb-2'>Arsen Zuna @ 2024</p>
		</footer>
	)
}

export default Footer;