import React, { useState, useCallback, useMemo } from 'react';
import './auction.css';
import Countdown from './countdown/Countdown';
import Card from './card/Card';
import CustomButton from './../ui/CustomButton';
import auctionStickerImg from './../../images/auction-stickers/Witcher-3.svg';
import auctionAuthorsImg from './../../images/auction-authors/serge_vm222.jpg';
import auctionCountdownImg from './../../images/icons/alarm-clock.svg';
import cardStickerImg from '../../images/auction-stickers/Alien-2x.svg';
import cardAuthorImg from '../../images/auction-authors/serge_vm222.jpg';

const Auction = () => {
  const [countCripto, setCountCripto] = useState(1);
  const [countUsd, setCountUsd] = useState(3512);

  const onClickDep = useCallback(() => {
    setCountCripto((prev) => prev + 1);
    setCountUsd((prev) => prev + 3512);
  }, []);

  const eth = useMemo(() => (countCripto / 100).toFixed(2), [countCripto]);
  const usd = useMemo(() => (countUsd / 100).toLocaleString(), [countUsd]);

  return (
    <section className="auction">
      <div className="container">
        <div className="auction__inner">
          <div className="auction__header">
            <h1 className="section__title">Аукцион</h1>
            <div className="live-marker">
              <span>•</span> Live auction
            </div>
          </div>
          <div className="auction__main">
            <div className="auction__image">
              <img src={auctionStickerImg} alt="item" />
            </div>
            <div className="auction__info">
              <div className="auction__author">
                <div className="circle__author-img">
                  <img src={auctionAuthorsImg} alt="author" />
                </div>
                Serge_VM222
              </div>
              <div className="auction__info-title">Witcherrr_3 (xml_t5)</div>
              <div className="auction__bet">
                <div className="bet__price">
                  Ставка:
                  <div className="price-cripto">{eth} ETH</div>
                  <div className="price-usd">${usd}</div>
                </div>
                <div className="bet__countdown">
                  <div className="bet__countdown-title">Окончание через:</div>
                  <Countdown className="bet__countdown-content" />
                  <img
                    className="bet__countdown-image"
                    src={auctionCountdownImg}
                    alt="alarm"
                  />
                </div>

                <CustomButton onClick={onClickDep}>
                  Сделать ставку
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="auction__list">
            <h3 className="section__subtitle">Другие аукционы</h3>
            <div className="auction__list-content">
              <Card
                image={cardStickerImg}
                authorImage={cardAuthorImg}
                authorName="Frank Nagval"
                name="Alien (green) e_e"
                price="0.02 ETH"
                time="03 часа 25 мин 23 сек"
              />
            </div>
            <div className="auction__list-btn">
              <button>Все аукционы</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auction;
