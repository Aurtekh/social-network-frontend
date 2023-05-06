import React from 'react';
import logo from '../assets/img/logoOld.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper__left">
          <img className="header__logo" src={logo} alt="Олдтакте" />
          <input type="search" placeholder="поиск людей"></input>
        </div>
        <div className="header__wrapper__right">
          <div className="header__nav">
            <Link to={'/'} className="header__nav__link">
              люди
            </Link>
          </div>
          <div className="header__nav">
            <Link to={'/'} className="header__nav__link">
              новости
            </Link>
          </div>
          <div className="header__nav">выйти</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
