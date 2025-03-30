import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className='footer-content'>
          <div className="footer__logo">
            <a href="/">
              <img src={'images/icons/logo.svg'} alt="logo" />
            </a>
          </div>
          <div className="footer__nav">
            <div className="nav__item">
              <a href="/">Соглашение</a>
            </div>
            <div className="nav__item">
              <a href="/">Лицензия</a>
            </div>
            <div className="nav__item">
              <a href="/">FAQ</a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-tag'>
        AURA	&#169; | 2025
      </div>
    </div>
  )
}

export default Footer