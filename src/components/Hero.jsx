import react from "react";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {fadeIn} from "../variants.js";
import CV from "../../public/assets/Arsen Zuna - Curriculum Vitae.pdf"

const Hero = () => {
	return (
		<div className='relative isolate w-full px-6 pt-14 lg:px-8'>
			<div className='mx-auto max-w-4xl py-32 sm:py-48 lg:py-56'>
				<div className='text-center'>
					<motion.h1
						variants={fadeIn('down')}
						initial='hidden'
						whileInView='show'
						className='text-5xl font-bold tracking-tight text-red-500 sm:text-7xl'>Hey there, my name is Arsen.</motion.h1>
					<p className='mt-10 text-lg text-white'>
						<TypeAnimation
							sequence={[
								'I’m a front-end developer eager to apply my skills and continually improve by creating responsive, user-friendly web experiences.',
								1000
							]}
							wrapper='span'
							speed={60}
							repeat={Infinity}
						/>
					</p>
					<motion.div
						variants={fadeIn('up')}
						initial='hidden'
						whileInView='show'
						className='mt-12 flex items-center justify-center gap-x-6'>
						<a href={CV} download='ArsenZuna_Resume' rel='noreferrer' target='_blank'>
							<button className='cv_button font-bold px-3.5 py-2.5'>Check Out My Resume</button>
						</a>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Hero;