import React from 'react';
import './top-sales.css'
import TopSalesCard from './top-sales-card/TopSalesCard';

const TopSales = () => {
  const cards = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="top-sales">
        <div className="container">
          <div className="top-sales__inner">
            <h1 className="top-sales__title">
              Топ продаж
            </h1>
            <div className="top-sales__content">
              {cards.map((i) => {
                return (<TopSalesCard
                  topAuthor={'images/top-author/ttgs.png'}
                  topSticker={'images/top-stickers/Holofobia1.svg'}
                  key={i}
                />)
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="top-sales__rules">
        <div className="container">
          <div className="top-sales__rules-inner">
            <div className="top-sales__rules-title">
              Для попадания в топ необходимо:
            </div>
            <ul className='top-sales__rules-list'>
              <li className='rules-list__item'>
                <img src={'images/icons/top-sales-rules-1.svg'} alt="icon" />
                Минимум пять опубликованных работ
              </li>
              <li className='rules-list__item'>
                <img src={'images/icons/top-sales-rules-2.svg'} alt="icon" />
                Инвайт трём коллегам по цеху
              </li>
              <li className='rules-list__item'>
                <img src={'images/icons/top-sales-rules-3.svg'} alt="icon" />
                Верифицированный аккаунт
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default TopSales