import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../variants.js";
import { projectsData } from "../utils/data.jsx";

const Projects = () => {
	return (
		<section className='my-10 pb-10 w-full'>
			<motion.h2
				variants={fadeIn('down')}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.4 }}
				className='flex justify-center items-center font-bold text-4xl pb-10 text-white'>Projects</motion.h2>
			<div className='container flex flex-1 justify-center mx-auto w-full'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-28 lg:gap-y-16 sm:gap-x-10 sm:gap-y-8 sm:mr-3 sm:ml-3'>
					{projectsData.map((item, index) => {
						return (
							<div
								key={index}
								className='max-w-sm w-full p-4 bg-white rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'
							>
								<img
									className='w-full h-60 object-cover rounded-t-lg'
									alt={item.alt}
									src={item.image}
								/>
								<div className='p-4'>
									<h2 className='flex flex-1 justify-center items-center text-2xl text-blue-950 font-bold'>{item.name}</h2>
									<p className='text-blue-950 pt-2'>{item.description}</p>
									<div className='flex justify-center items-center pt-6'>
										<a href={item.link} target='_blank' rel='noreferrer'>
											<button
												className='font-semibold bg-cyan-700 hover:bg-red-600 text-white px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400'
											>
												Learn More
											</button>
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Projects;