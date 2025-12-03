"use client";
import './Header.css';
import Cta from './Cta';
import Me from "../../../public/assets/me.png"
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__intro">
          <h5>Hello I'm</h5>
          <h1>Abhin.v</h1>
          <h5 className="text-light">Web Developer</h5>
        </div>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img
            src={Me}
            alt="Abhin.v, Web Developer"
            className="me__image"
          />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
