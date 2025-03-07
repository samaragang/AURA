import './card.css'
import auctionStickerImg from './../../../images/auction-stickers/Alien-2x.svg'
import auctionAuthorImg from './../../../images/auction-authors/serge_vm222.jpg'
const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={auctionStickerImg} alt="item" />
      </div>
      <div className="card__info">
        <div className="card__author">
          <div className="author__avatar">
            <img src={auctionAuthorImg} alt="author" />
          </div>
          <div className="author__name">
            Frank.Nagval
          </div>
        </div>
        <div className="card__name">Alien (green) e_e</div>
        <div className="card__price">0.02 ETH</div>
        <div className="card__count">03 часа 25 мин 23 сек</div>
      </div>
    </div>
  );
}

export default Card;