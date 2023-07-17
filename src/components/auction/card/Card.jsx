import './card.css'

const Card = () => {
  return ( 
    <div className="card">
      <div className="card__image">
        <img src="" alt="" />
      </div>
      <div className="card__info">
        <div className="card__author">
          <img src="" alt="" className="author__avatar" />
          Frank.Nagval
        </div>
        <div className="card__name">Alien (green) e_e</div>
        <div className="card__price">0.02 ETH</div>
        <div className="card__count"></div>down
      </div>
    </div>
   );
}
 
export default Card;