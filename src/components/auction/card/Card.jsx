
import Countdown from '../countdown/Countdown';
import './card.css';

const Author = ({ name }) => {
  return (
    <div className="card__author">
      <div className="author__avatar">
        <img src={`images/auction-authors/${name}.jpg`} alt="author" />
      </div>
      <div className="author__name">{name}</div>
    </div>
  );
}

const Card = ({ authorName, name, price, time,  onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__image">
        <img src={`images/auction-stickers/${name}.png`} alt="item" />
      </div>
      <div className="card__info">
        <Author name={authorName} />
        <div className="card__name">{name}</div>
        <div className="card__price">{price}</div>
        <Countdown duration={time} isCard={true}/>
      </div>
    </div>
  );
};

export default Card;
