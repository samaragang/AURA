import "./intro.css"
import btnBorder from "/public/images/icons/btn-border.svg"
const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <h1 className="intro__title">Площадка для реализации криптостикеров</h1>
          <div className="intro__btns">
            <button className="buy-btn">Купить</button>
            <button className="author-btn">
              <img src={btnBorder} alt="" />
              <span>
                Стать автором
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;