import "./header.css"
import logoImg from '/public/images/icons/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/">
              <img src={logoImg} alt="logo" />
            </a>
          </div>
          <div className="header__nav">
            <div className="nav__item">
              <a href="/">Авторы</a>
            </div>
            <div className="nav__item">
              <a href="/">Коллекции</a>
            </div>
            <div className="nav__item">
              <a href="/">Сервисы</a>
            </div>
          </div>
          <div className="header__wallet-btn">
            <button>Кошелёк</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;