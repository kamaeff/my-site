import { motion } from 'framer-motion'
import React from 'react'
import Typewriter from 'typewriter-effect'
import './header.css'

import git from '../../assets/icons/github.png'

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
		</div>
		<motion.div
			className='box '
			whileHover={{ scale: 1.1 }}
			transition={{ type: 'spring', stiffness: 400, damping: 10 }}
		>
			<a
				id='#contacts'
				className='header__rightside'
				href={git}
				target='_blank'
				rel='noreferrer'
			>
				GitHub
			</a>
		</motion.div>
	</div>
)

export default Header
