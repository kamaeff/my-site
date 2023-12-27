import React, { useEffect, useState } from 'react'
import fetchMessages from './components/FetchTg'
import { tg } from './components/imgImports'
import './main.css'

const Main = () => {
	const [messages, setMessages] = useState([])
	const [count, setCount] = useState(0)
	const [data, setData] = useState([])

	const fetchData = async () => {
		const response = await fetch('api/user_stat')
		setData(await response.json())
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
			<div className='main__container'>
				<div className='main__text'>
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
							(подключение базы данных, подключение оплаты).
						</span>{' '}
					</p>{' '}
					<p>
						Активно изучаю Python и JavaScript. Для практики пишу телеграм
						ботов, чтобы понять как работать с бекэндом.
					</p>{' '}
					<p>Данный сайт тоже можно назвать большим проектом (:</p>{' '}
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
					<div className='d-grid gap-2 mt-3 main__tg_chat'>
						{messages.map(message => (
							<div key={message.id} className=''>
								<span className='main__tg-text_chat'>{message.text}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='main__stock'>
				<h3 className='main__stock--title'>Статистика бота</h3>
				<div className='d-flex align-items-center gap-2'>
					Уникальных пользователей:
					{data.message === undefined ? (
						<div className='spinner-border spinner-grow-sm' role='status'>
							<span className='sr-only'></span>
						</div>
					) : (
						data.message
					)}
				</div>
			</div>
		</div>
	)
}

export default Main
