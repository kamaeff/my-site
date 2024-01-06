import { motion } from 'framer-motion'

import React, { useEffect, useState } from 'react'
import fetchMessages from './components/FetchTg'
import { tg } from './components/imgImports'
import './main.css'

import spinner from '../../assets/img/Loading.svg'
import { stocklogo } from './components/imgImports'

const Main = () => {
	const [messages, setMessages] = useState([])
	const [count, setCount] = useState([])
	const [data, setData] = useState([])

	const [isStatsVisible, setStatsVisible] = useState({
		stock1: false,
		stock2: false,
		stock3: false,
	})

	const handleTitleClick = stockName => {
		setStatsVisible(prev => ({
			...prev,
			[stockName]: !prev[stockName],
		}))
	}

	const fetchData = async () => {
		const response = await fetch('api/user_stat')
		const data = await response.json()
		setData(data)
	}

	useEffect(() => {
		const intervalId = setInterval(
			() => fetchMessages(setMessages, setCount),
			3600 * 1000
		)

		fetchData()

		return () => {
			fetchMessages(setMessages, setCount).then(() => clearInterval(intervalId))
		}
	}, [])

	return (
		<div className='main'>
			<section className='main__container'>
				<div className='main__text' id='main__text'>
					<p>
						Привет! Меня зовут{' '}
						<a
							href='#link'
							className='main__text--italic text-black fw-bold p-0 '
						>
							Камаев Антон
						</a>
						. Я начинающий фронтенд-разработчик с страстью к созданию
						великолепных пользовательских интерфейсов. В мире веб-технологий я
						только начинаю свой путь, за время совоего обучения мне удалось
						реализовать немного, но очень интересных проектов{' '}
						<span className='main__text--italic'>
							(ниже вы найдете некоторые из них)
						</span>{' '}
					</p>
					<p>
						Чтобы долго тебя не задерживать кратко расскажу тебе о своих
						проектах. Один из самых масштабных моих проектов это разработка
						телеграм бота на NodeJs{' '}
						<span className='main__text--italic'>(StockHubBot).</span> Проект я
						использовал как дипломну работу, он включает большие модули
						<span className='main__text--italic'>
							{' '}
							(подключение базы данных и оплаты).
						</span>{' '}
					</p>{' '}
					<p>
						Активно изучаю Python и JavaScript. Для практики пишу телеграм
						ботов, чтобы понять как работать с бекэндом.
					</p>{' '}
				</div>
				<div className='main__tg'>
					<a href='https://t.me/kamaev_log' className='main__tg--title'>
						<img
							src={tg}
							alt='tgtitle'
							width={32}
							height={32}
							className='me-2'
						/>
						{`Tg blog. Subs: ${count}`}
					</a>
					{messages.length !== 0 ? (
						<div className='d-grid gap-2 mt-3 main__tg_chat'>
							{messages.map(message => (
								<div key={message.id} className=''>
									<span className='main__tg-text_chat'>{message.text}</span>
								</div>
							))}
						</div>
					) : (
						<div className='mt-4 main__tg_loading'>
							<img
								src={spinner}
								alt='loading'
								className='rotate '
								width={32}
								height={32}
							/>{' '}
							<span className='main__tg_loading--text'>Loading</span>
						</div>
					)}
				</div>
			</section>
			<section className='main__projects'>
				<div className='main__stock'>
					<motion.div
						className='box '
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						onClick={() => handleTitleClick('stock1')}
					>
						<img
							src={stocklogo}
							alt='stocklogo'
							width={250}
							height={250}
							className='main__stock--logo'
						/>
					</motion.div>

					<div
						className={`stats-container ${
							isStatsVisible.stock1 ? 'stats-visible' : ''
						}`}
					>
						<h5 className='main__stock--title pt-2'>StockHubBot</h5>
						<div className='main__stock--text '>
							<p>
								{' '}
								Бот предоставляет услугу по поиску и заказа пары с{' '}
								<span className='itallic '>Poizon.</span>
								<br />
								<br />В данном проекте я изучал работу тг ботов и настолько
								"заигрался", что у меня получился реальный продукт, который
								содержит в себе большой функционал{' '}
								<span className='itallic'>
									(mysql и платежная система Монета.ру)
								</span>
								<br />
								<br />
								<span>
									<span className='itallic text-dark'>GitHub</span> {'-->'}{' '}
									<a
										href='https://github.com/kamaeff/tg-bot-js-yokross.v3'
										target='_blank'
										className='text-primary itallic border-bottom border-primary'
										rel='noreferrer'
									>
										StockHubBot.v3
									</a>
								</span>
								<br />
								<span className='itallic text-dark'>
									Use: <span className='itallic'>JS, php</span>
								</span>
							</p>
						</div>
						<div className='main__stock_stats'>
							<h5 className='main__stock_stats--title'>Bot stats:</h5>
							<div className='main__stock_stats--item'>
								<span className='itallic text-dark'>Users: </span>
								{data.message && data.message.userCount !== undefined ? (
									data.message.userCount
								) : (
									<img
										src={spinner}
										alt='loading'
										className='rotate'
										width={20}
										height={20}
									/>
								)}
							</div>
							<div className='main__stock_stats--item'>
								<span className='itallic text-dark'>Orders: </span>
								{data.message && data.message.ordersCount !== undefined ? (
									data.message.ordersCount
								) : (
									<img
										src={spinner}
										alt='loading'
										className='rotate'
										width={20}
										height={20}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Main
