import react, {useRef} from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../variants.js";
import * as emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('arsenzuna01', 'email_template1', form.current, {
			publicKey: 'HRZxFHbB071q3qEwo'
		})
			.then(
				() => {
					console.log('SUCCESS!');
					alert('Thank you for contacting me! Your message has been delivered and I will be in touch with you ASAP.')
				},
				(error) => {
					console.log('FAILED...', error.text);
					alert('Unfortunately, your message was not delivered. Come back soon or try contacting me through your phone number.')
				},
			);
	};

	return (
		<section className='w-full bg-white pt-16 pb-14'>
			<motion.div
				variants={fadeIn('up')}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.4 }}
				className='container w-full'>
				<div className='max-w-md mx-auto px-8 py-6 rounded-2xl bg-slate-100 hover:drop-shadow-2xl'>
					<h2
						className='flex flex-1 justify-center items-center text-4xl font-bold text-blue-950 mb-4'>Contact Me</h2>
					<form ref={form} onSubmit={sendEmail}>
						<div className='mb-4'>
							<label className='block font-semibold text-blue-950 mb-1' for='name'>Your Name</label>
							<input
								className='w-full px-4 py-2 text-blue-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-700 transition duration-300'
								placeholder='Enter your name'
								type='text'
							/>
						</div>
						<div className='mb-4'>
							<label className='block font-semibold text-blue-950 mb-1' for='email'>Your Email</label>
							<input
								className='w-full px-4 py-2 text-blue-950 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-700 transition duration-300'
								placeholder='Enter your email'
								name='email'
								id='email'
								type='email'
							/>
						</div>
						<div className='mb-4'>
							<label className='block font-semibold text-blue-950 mb-1' for='message'
							>Your Message</label
							>
							<textarea
								className='w-full px-4 py-2 text-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition duration-300'
								rows='4'
								placeholder='Enter your message'
								name='message'
								id='message'
							></textarea>
						</div>
						<button
							className='w-full bg-cyan-700 font-semibold text-white py-2 px-4 rounded-lg hover:bg-blue-950 transition duration-300'
							type='submit'
						>
							Send Message
						</button>
					</form>
				</div>
			</motion.div>
		</section>
	)
}

export default Contact;