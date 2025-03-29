import './card.css';

const Author = ({ imgSrc, name }) => (
  <div className="card__author">
    <div className="author__avatar">
      <img src={imgSrc} alt="author" />
    </div>
    <div className="author__name">{name}</div>
  </div>
);

const Card = ({ image, authorImage, authorName, name, price, time }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="item" />
      </div>
      <div className="card__info">
        <Author imgSrc={authorImage} name={authorName} />
        <div className="card__name">{name}</div>
        <div className="card__price">{price}</div>
        <div className="card__count">{time}</div>
      </div>
    </div>
  );
};

export default Card;
