import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './auction.css';
import Countdown from './countdown/Countdown';
import Card from './card/Card';
import CustomButton from './../ui/CustomButton';
import auctionCountdownImg from '/public/images/icons/alarm-clock.svg';
import { getAuctionData } from '/server-data';

const Auction = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [auctions, setAuctions] = useState([]);
  const [bets, setBets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuctionData().then(data => {
      setAuctions(data);
      setBets(data.map(item => +item.bet));
      setLoading(false);
    });
  }, []);

  const handleBid = useCallback(() => {
    setBets(prev => {
      const updated = [...prev];
      updated[selectedCardIndex] = (+updated[selectedCardIndex] + 0.01).toFixed(2);
      return updated;
    });
  }, [selectedCardIndex]);

  const handleCardSelect = (index) => {
    setSelectedCardIndex(index);
  };

  const currentAuction = auctions[selectedCardIndex];
  const currentBet = bets[selectedCardIndex];

  if (loading) {
    return <div className="auction__loading">Загрузка аукционов...</div>;
  }

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
              <img
                src={`images/auction-stickers/${currentAuction.name}.png`}
                alt={currentAuction.name}
              />
            </div>
            <div className="auction__info">
              <div className="auction__author">
                <div className="circle__author-img">
                  <img
                    src={`images/auction-authors/${currentAuction.author}.jpg`}
                    alt={currentAuction.author}
                  />
                </div>
                {currentAuction.author}
              </div>
              <div className="auction__info-title">{currentAuction.name}</div>
              <div className="auction__bet">
                <div className="bet__price">
                  Ставка:
                  <div className="price-cripto">{currentBet} ETH</div>
                  <div className="price-usd">${(currentBet * 3512).toLocaleString()}</div>
                </div>
                <div className="bet__countdown">
                  <div className="bet__countdown-title">Окончание через:</div>
                  <Countdown duration={currentAuction.timer} />
                  <img
                    className="bet__countdown-image"
                    src={auctionCountdownImg}
                    alt="Секундомер"
                  />
                </div>
                <CustomButton onClick={handleBid}>Сделать ставку</CustomButton>
              </div>
            </div>
          </div>

          <div className="auction__list">
            <h3 className="section__subtitle">Другие аукционы</h3>
            <div className="auction__list-content">
              {auctions.map((item, index) =>
                index !== selectedCardIndex ? (
                  <Card
                    key={index}
                    onClick={() => handleCardSelect(index)}
                    authorName={item.author}
                    name={item.name}
                    price={`${bets[index]} ETH`}
                    time={item.timer}
                  />
                ) : null
              )}
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
