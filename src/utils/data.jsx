import gitHub from '../../public/assets/github.png'
import linkedin from '../../public/assets/linkedin.png'
import html from '../../public/assets/html.png'
import css from '../../public/assets/css.svg'
import javascript from '../../public/assets/javascript.png'
import react from '../../public/assets/react.svg'
import tailwind from '../../public/assets/tailwind.svg'
import gsap from '../../public/assets/gsap.svg'
import sentry from '../../public/assets/sentry.png'
import git from '../../public/assets/git.png'
import sql from '../../public/assets/sql.svg'
import portfolio from '../../public/assets/portfolio.png'
import tattoostudio from '../../public/assets/tattoostudio.png'
import applesiteclone from '../../public/assets/applesiteclone.png'
import proptyfinder from '../../public/assets/proptyfinder.png'
import pacman from '../../public/assets/pacman.png'
import carparking from '../../public/assets/carparking.png'

export const navData = {
	items: [
		{ href: '', name: 'Home' },
		{ href: 'about', name: 'About' },
		{ href: 'projects', name: 'Projects' },
		{ href: 'contact', name: 'Contact' },
	],
};

export const socialData = [
	{ href: 'https://github.com/ArsenZuna', icon: gitHub, alt: 'github' },
	{ href: 'https://www.linkedin.com/in/arsen-zuna-5a14a218b/', icon: linkedin, alt: 'linkedin' },
];

export const skillsData = [
	{name: 'HTML', icon: html, alt: 'html_logo'},
	{name: 'CSS', icon: css, alt: 'css_logo'},
	{name: 'JavaScript', icon: javascript, alt: 'js_logo'},
	{name: 'Git',icon: git, alt: 'git_logo'},
	{name: 'Tailwind', icon: tailwind, alt: 'tailwind_logo'},
	{name: 'React.js', icon: react, alt: 'react_logo'},
	{name: 'GSAP', icon: gsap, alt: 'gsap_logo'},
	{name: 'Sentry', icon: sentry, alt: 'sentry_logo'},
	{name: 'SQL', icon: sql, alt: 'sql_logo'}
];

export const projectsData = [
	{name:'JS Pacman', description: 'Pacman-like game made by only using HTML, CSS, and JavaScript to provide a simple gameplay and mechanics.', link: 'https://github.com/ArsenZuna/pacman', image: pacman, alt: 'pacman'},
	{name:'Tattoo Studio', description: 'A simple site for a tattoo studio made with React.js using frameworks like Tailwind and Framer Motion.', link: 'https://github.com/ArsenZuna/tattoo_studio', image: tattoostudio, alt: 'tattoostudio'},
	{name:'ProptyFinder', description: 'A responsive and simple React app where you can search or upload different types of properties.', link: 'https://github.com/ArsenZuna/proptyfinder', image: proptyfinder, alt: 'property'},
	{name:'Apple Site-Clone', description: 'Developed a React.js clone of the Apple site, mostly focusing on the 3D view of their iPhone Pro models.', link: 'https://github.com/ArsenZuna/applesite_clone', image: applesiteclone, alt: 'applesite'},
	{name:'Longstay', description: 'A React.js site to reserve a parking space for your vehicle before you go to the airport without a problem.', link: 'https://github.com/ArsenZuna/car-parking', image: carparking, alt: 'carparking'},
	{name:'Portfolio', description: 'Creating my own portfolio to show and improve my skills by using Vite, React.js, Tailwind, Motions, etc.', link: 'https://github.com/ArsenZuna/arsenz_portfolio', image: portfolio, alt: 'portfolio'},
]