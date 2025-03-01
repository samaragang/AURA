import React from 'react';
import './auction.css'
import Countdown from './countdown/Countdown';
import auctionStickerImg from './../../images/auction-stickers/Witcher-3.svg'
import auctionAuthorsImg from './../../images/auction-authors/serge_vm222.jpg'
import auctionCountdownImg from './../../images/icons/alarm-clock.svg'


const Auction = () => {
  const [countCripto, setCountCripto] = React.useState(1);
  const [countUsd, setCountUsd] = React.useState(35124);
  const onClickDep = () => {
    setCountCripto(countCripto + 1);
    setCountUsd(countUsd + 35124);
  }
  return (
    <section className="auction">
      <div className="container">
        <div className="auction__inner">
          <div className="auction__header">
            <h1 className="section__title">Аукцион</h1>
            <div className="live-marker"><span>•</span> Live auction</div>
          </div>
          <div className="auction__main">
            <div className="auction__image">
              <img src={auctionStickerImg} alt="" />
            </div>
            <div className="auction__info">
              <div className="auction__author">
                <div className="circle__author-img">

                  <img src={auctionAuthorsImg} alt="" />
                </div>
                Serge_VM222
              </div>
              <div className="auction__info-title">Witcherrr_3 (xml_t5)</div>
              <div className="auction__bet">
                <div className="bet__price">
                  Ставка:
                  <div className="price-cripto">{countCripto / 100} ETH</div>
                  <div className="price-usd">${countUsd / 1000}</div>
                </div>
                <div className="bet__countdown">
                  <div className='bet__countdown-title'>Окончание через:</div>
                  <Countdown className='bet__countdown-content' />
                  <img className='bet__countdown-image' src={auctionCountdownImg} alt="alarm" />
                </div>
                <button className="bet__button" onClick={onClickDep}>Cделать ставку</button>
              </div>
            </div>
          </div>
          <div className="auction__list">
            <h3 className="section__subtitle">Другие аукционы</h3>
            {/* <Card /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auction;