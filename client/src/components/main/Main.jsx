import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'

import './main.css'
import spinner from '../../assets/img/Loading.svg'
import {mysite, stocklogo, tg, yokross} from './components/imgImports'

const Main = () => {
  const [data_tg, setData_tg] = useState([])
  const [messages, setMessages] = useState([])

  const [isStatsVisible, setStatsVisible] = useState({
    pro_container1: false,
    pro_container2: false,
    pro_container3: false,
  })

  const handleTitleClick = stockName => {
    setStatsVisible(prev => ({
      ...prev,
      [stockName]: !prev[stockName],
    }))
  }

  const fetchMessagesData = async () => {
    try {
      const response = await fetch('api/users_tg')
      const data_tg = await response.json()
      const numberOfMembers = data_tg.members.result
      setData_tg(numberOfMembers)
      const messages = data_tg.messages
      setMessages(messages)
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }
  useEffect(() => {
    fetchMessagesData()
  }, [])

  return (
    <div className='main'>
      <section className='main__container'>
        <div className='main__text' id='main__text'>
          <p>
            Привет! Меня зовут{' '}
            <a
              href='https://t.me/kamaev_log'
              target='_blank'
              className='main__text--italic text-black fw-bold p-0 '
              rel='noreferrer'
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
            {`Tg blog. Subs: ${data_tg}`}
          </a>
          {messages.length !== 0 ? (
            <div className='d-grid gap-2 mt-3 main__tg_chat'>
              {messages.map(message => (
                <div key={message.id}>
                  <span className='main__tg_chat--message'>{message.text}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className='mt-4 main__tg_loading'>
              <img
                src={spinner}
                alt='loading'
                className='rotate '
                width={30}
                height={30}
              />{' '}
              <span className='main__tg_loading--text'>Loading</span>
            </div>
          )}
        </div>
      </section>

      <h2 className='main__projects--title'>My Projects</h2>

      <section className='main__projects' id='projects'>
        <div className='main__stock'>
          <motion.div
            className='box '
            whileHover={{scale: 1.05}}
            transition={{type: 'spring', stiffness: 400, damping: 10}}
            onClick={() => handleTitleClick('pro_container1')}
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
              isStatsVisible.pro_container1 ? 'stats-visible' : ''
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
                  <span className='itallic text-dark fw-bold'>GitHub</span>{' '}
                  {'-->'}{' '}
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
                <span>
                  <span className='itallic text-dark fw-bold'>Tg </span>
                  {'-->'}{' '}
                  <a
                    href='https://t.me/stockhub12bot'
                    target='_blank'
                    className='text-primary itallic border-bottom border-primary'
                    rel='noreferrer'
                  >
                    @stockhub12bot
                  </a>
                </span>
                <br />
                <span className='itallic text-dark fw-bold'>Use: </span>
                <span className='itallic'> JavaScript, Php</span>
              </p>
            </div>
          </div>
        </div>

        <div className='main__stock'>
          <motion.div
            className='box '
            whileHover={{scale: 1.05}}
            transition={{type: 'spring', stiffness: 400, damping: 10}}
            onClick={() => handleTitleClick('pro_container2')}
          >
            <img
              src={yokross}
              alt='yokross'
              width={250}
              height={250}
              className='main__stock--logo'
            />
          </motion.div>

          <div
            className={`stats-container ${
              isStatsVisible.pro_container2
                ? 'stats-visible pro_container2'
                : ''
            }`}
          >
            <h5 className='main__stock--title pt-2'>YokrossBot</h5>
            <div className='main__stock--text '>
              <p>
                {' '}
                Бот предоставляет услугу по поиску пары с крупных маркетплейсов
                обуви России.
                <br />
                <br />
                Данный проект находится в разработке. <br />
                <br />
                <span>
                  <span className='itallic text-dark fw-bold'>GitHub</span>{' '}
                  {'-->'}
                  <a
                    href='https://github.com/kamaeff/searchbottg'
                    target='_blank'
                    className='text-primary itallic border-bottom border-primary'
                    rel='noreferrer'
                  >
                    YokrossBot
                  </a>
                </span>
                <br />
                <span className='itallic text-dark fw-bold'>Use:</span>
                <span className='itallic'> JS</span>
              </p>
            </div>
          </div>
        </div>

        <div className='main__stock'>
          <motion.div
            className='box '
            whileHover={{scale: 1.05}}
            transition={{type: 'spring', stiffness: 400, damping: 10}}
            onClick={() => handleTitleClick('pro_container3')}
          >
            <img
              src={mysite}
              alt='yokross'
              width={250}
              height={250}
              className='main__stock--logo'
            />
          </motion.div>

          <div
            className={`stats-container ${
              isStatsVisible.pro_container3
                ? 'stats-visible pro_container3'
                : ''
            }`}
          >
            <h5 className='main__stock--title pt-2'>Kamaeff Site</h5>
            <div className='main__stock--text '>
              <p>
                {' '}
                Данный проект создан для изучения ReactJs.
                <br />
                <br />
                Я всегда пытаюсь изучать что-то новое. Для меня текущий сайт
                один из самых интересных проектов, потому что я всегда хотел
                изучить React. <br />
                <br />
                <span>
                  <span className='itallic text-dark fw-bold'>GitHub</span>{' '}
                  {'-->'}
                  <a
                    href='https://github.com/kamaeff/my-site'
                    target='_blank'
                    className='text-primary itallic border-bottom border-primary'
                    rel='noreferrer'
                  >
                    KamaeffSite
                  </a>
                </span>
                <br />
                <span className='itallic text-dark fw-bold'>Use:</span>
                <span className='itallic'> JS</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
