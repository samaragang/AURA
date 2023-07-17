import "./intro.css"
import btnBorder from "./../../images/img/btn-border.svg"
const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <h1 className="intro__title">Площадка для реализации криптостикеров</h1>
          <div className="intro__btns">
            <button className="buy-btn">Купить</button>
            <button className="author-btn">
              {/* <svg width="247" height="70" viewBox="0 0 247 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="242" height="65" rx="32.5" stroke="url(#paint0_linear_22_36)" stroke-width="5" />
                <defs>
                  <linearGradient id="paint0_linear_22_36" x1="123.5" y1="0" x2="123.5" y2="70" gradientUnits="userSpaceOnUse">
                    <stop offset="0.270833" stop-color="#46F4DB" />
                    <stop offset="1" stop-color="#57D272" />
                  </linearGradient>
                </defs>
              </svg> */}
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