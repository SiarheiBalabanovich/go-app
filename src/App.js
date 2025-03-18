import React, { useState } from 'react';
import './App.scss';
import logo from './images/logo.svg';
import planet from './images/EARTH.png';
import burgerIcon from './images/menu_burger.svg';
import closeIcon from './images/close_burger.svg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <img src={logo} alt="GO" />
          </div>
          {/* Burger */}
          <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? closeIcon : burgerIcon} alt="Menu Toggle" />
          </button>
          {/* Navigation */}
          <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
            <ul className="header__menu">
              <li className="header__menu-item"><a href="#">Home</a></li>
              <li className="header__menu-item"><a href="#">Products</a></li>
              <li className="header__menu-item header__menu-item--cart"></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              Discover the vast <br /> expanses of <span className="hero__title--pink">space</span>
            </h1>
            <p className="hero__subtitle">
              Where the possibilities are <span className="hero__subtitle--yellow">endless!</span>
            </p>
            <button className="hero__button">Learn more</button>
          </div>
          <div className="hero__planet">
            <img src={planet} alt="Planet" />
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="offers">
        <div className="offers__container">
          <h2 className="offers__title">Offers</h2>

          {/* First big card */}
          <div className="offers__card offers__card--large offers__card--bg1">
            <h3 className="offers__card-title">Move the borders <br /> of reality!</h3>
            <p className="offers__card-text">
              Go on a space adventure 
              <span className="offers__card-text--extra"> – it's possible with us!</span>
            </p>
            <button className="offers__button">Learn more</button>
          </div>

          {/* 2 small cards */}
          <div className="offers__row">
            <div className="offers__card offers__card--small offers__card--bg2">
              <h3 className="offers__card-title">Space is not <br /> just stars and <br /> planets</h3>
              <p className="offers__card-text">It is a majestic journey to</p>
              <button className="offers__button">Learn more</button>
            </div>
            <div className="offers__card offers__card--small offers__card--bg3">
              <h3 className="offers__card-title">For those <br /> who dream <br /> of stars</h3>
              <p className="offers__card-text">Our offer: make your dream come true</p>
              <button className="offers__button">Learn more</button>
            </div>
          </div>

          {/* Second big card */}
          <div className="offers__card offers__card--large offers__card--second offers__card--bg4">
            <h3 className="offers__card-title">Fulfill your <br /> fantastic dreams</h3>
            <p className="offers__card-text">Space has never been so close</p>
            <button className="offers__button">Learn more</button>
          </div>

          {/* Embark on a space journey section */}
          <div className="offers__embark">
            <h2 className="offers__embark-title">Embark on a space journey</h2>
              <p className="offers__embark-text">
                Traveling into space is one of the most exciting and unforgettable adventures 
                that can change your life forever. And if you have ever dreamed of exploring stars,
                planets and galaxies, then our company is ready to help you realize this dream. 
              </p>
            <input type="checkbox" id="readmore-toggle" className="offers__embark-checkbox"/>
              <p className="offers__embark-text offers__embark-text--hidden">
                We offer a unique experience that will allow you to go on a space journey and see all 
                the secrets of the universe. We guarantee that every moment in space will be filled 
                with incredible impressions, excitement and new discoveries. Our team of professionals 
                takes care of your safety and comfort so that you can fully enjoy your adventure in space. 
                We offer various options for space excursions.
              </p>
            <label className="offers__embark-readmore" htmlFor="readmore-toggle"></label>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__rocket"></div>
          <span className="footer__text">Exciting space adventure!</span>
        </div>
      </footer>
    </div>
  );
}

export default App;