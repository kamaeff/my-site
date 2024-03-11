import React from 'react'
import './footer.css'

import {git, inst, tg, vk} from '../main/components/imgImports'

const icons = [
  {
    src: inst,
    alt: 'insta',
    href: 'https://www.instagram.com/x_t0zzy_x?igsh=MTc0ZDVsbW5qMzY3eQ==',
  },
  {src: vk, alt: 'vk', href: 'https://vk.com/antoster2'},
  {src: tg, alt: 'tg', href: 'https://t.me/kamaev_log'},
  {src: git, alt: 'git', href: 'https://github.com/kamaeff?tab=repositories'},
]

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__icons'>
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            className='footer__icons-item'
            style={{'--index': index}}
            target='_blank'
            rel='noreferrer'
          >
            <img src={icon.src} alt={icon.alt} width={28} height={28} />
          </a>
        ))}
      </div>
      <div className='footer__copiratiing'>
        Created by{' '}
        <a
          className='itallic'
          href='https://t.me/x_antoster_x'
          target='_blank'
          rel='noreferrer'
        >
          Kamaeff{' '}
        </a>
        2023
      </div>
    </div>
  )
}

export default Footer
