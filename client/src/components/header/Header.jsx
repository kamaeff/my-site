import { motion } from 'framer-motion'
import React from 'react'
import Typewriter from 'typewriter-effect'
import './header.css'

import git from '../../assets/icons/github.png'
import inst from '../../assets/icons/instagram.png'
import tg from '../../assets/icons/telegram.png'
import vk from '../../assets/icons/vk.png'

const icons = [
	{
		src: inst,
		alt: 'insta',
		href: 'https://www.instagram.com/x_t0zzy_x?igsh=MTc0ZDVsbW5qMzY3eQ==',
	},
	{ src: vk, alt: 'vk', href: 'https://vk.com/antoster2' },
	{ src: tg, alt: 'tg', href: 'https://t.me/kamaev_log' },
	{ src: git, alt: 'git', href: 'https://github.com/kamaeff?tab=repositories' },
]

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Header = () => (
	<div className='header'>
		<motion.div
			className='box '
			whileHover={{ scale: 1.1 }}
			transition={{ type: 'spring', stiffness: 400, damping: 10 }}
		>
			<a id='#projects' className='header__leftside' href='#projects'>
				Projects
			</a>
		</motion.div>

		<div className='header--title'>
			<motion.div
				className='box '
				whileHover={{ scale: 1.1 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				id='main'
				onClick={scrollToTop}
			>
				<Typewriter
					onInit={typewriter => {
						typewriter
							.typeString('< Kamaeff />')
							.start()
							.callFunction(() => {
								const cursor = document.querySelector('.Typewriter__cursor')
								cursor.classList.add('Typewriter__cursor-hide')
							})
					}}
				/>
			</motion.div>

			<div className='header__container_links'>
				{icons.map((icon, index) => (
					<a
						key={index}
						href={icon.href}
						className='header__container_links-item'
						style={{ '--index': index }}
					>
						<img src={icon.src} alt={icon.alt} width={28} height={28} />
					</a>
				))}
			</div>
		</div>

		<motion.div
			className='box '
			whileHover={{ scale: 1.1 }}
			transition={{ type: 'spring', stiffness: 400, damping: 10 }}
		>
			<a id='#contacts' className='header__rightside' href='#contacts'>
				GitHub
			</a>
		</motion.div>
	</div>
)

export default Header
