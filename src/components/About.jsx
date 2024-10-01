import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { skillsData } from "../utils/data.jsx";

const About = () => {
	return (
		<section className='w-full my-10 bg-white pb-20'>
			<div className='container mx-auto w-full xl:pl-[40px]'>
				<motion.h2
					variants={fadeIn('down')}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.4 }}
					className='text-4xl font-bold text-blue-950 text-center sm:text-center md:text-left pt-20 xl:pl-5'>About Me</motion.h2>
				<div className='flex flex-col xl:flex-row gap-y-10 sm:items-center'>
					{/* First section with responsive layout */}
					<motion.div
						variants={fadeIn('right')}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.4 }}
						className='flex-1 w-full flex justify-center'
					>
						<div className='flex flex-col sm:justify-center xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
							<p className='text-blue-950 text-center sm:text-left xl:pl-5'>
								I am a passionate and detail-oriented front-end developer with a strong foundation in web technologies.
								With a recent degree in Computer Science, I have developed expertise in HTML, CSS, JavaScript, React.js,
								and SQL. My work reflects a deep commitment to creating user-friendly, intuitive, and visually appealing
								interfaces. During my time at PayLink SH.A, I managed and optimized server tasks using PL/SQL, mentored interns, and
								contributed to decision-making processes. At OTP Bank Albania, I resolved front-end issues, automated
								tasks with SQL, and ensured data accuracy. Additionally, my internship at NEBULA Ltd. helped me enhance my skills in web
								application development using HTML, CSS, JavaScript, and React, while also gaining valuable experience in UI/UX
								design with Tailwind and Figma. I am constantly seeking to improve and collaborate on innovative projects that push the boundaries of
								technology and user experience.
							</p>
						</div>
					</motion.div>

					{/* Second section with responsive layout */}
					<motion.div
						variants={fadeIn('left')}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.4 }}
						className='flex-1 w-full flex justify-center'
					>
						<div className='grid grid-cols-3 gap-4 pb-5'>
							{skillsData.map((item, index) => {
								return (
									<div key={index} className='skillcard'>
										<li className='skillcard2 p-2 flex flex-col justify-center items-center'>
											<img src={item.icon} alt={item.alt} className='w-10 h-10' />
											<p className='text-white font-semibold'>{item.name}</p>
										</li>
									</div>
								)
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default About;
