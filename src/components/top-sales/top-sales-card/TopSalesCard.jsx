import React from 'react';
import './top-sales-card.css'

const TopSalesCard = ({ topAuthor, topSticker }) => {
  return (
    <div className="top-sales__item">
      <div className="top-sales__item-image">
        <img src={topSticker} alt="sticker" />
      </div>
      <div className="top-sales__item-content">
        <div className="item-content__author">
          <img className='item-content__author-avatar' src={topAuthor} alt="author" />
          <div className='item-content__author-name'>
            ttgs
          </div>
        </div>
        <div className="item-content__name">
          Holofobia1
        </div>
        <div className="item-content__price">
          4.70 ETH <span>($16,873.47)</span>
        </div>
      </div>
    </div>
  )
}

export default TopSalesCard