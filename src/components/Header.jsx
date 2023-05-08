import React from 'react';
import logo from '../assets/img/logoOld.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper__left">
          <Link to={'/'} style={{ display: 'block', height: '20px' }}>
            <img className="header__logo" src={logo} alt="Олдтакте" />
          </Link>
          <input type="search" placeholder="Поиск"></input>
        </div>
        <div className="header__wrapper__right">
          <div className="header__nav">
            <Link to={'/search'} className="header__nav__link">
              люди
            </Link>
          </div>
          <div className="header__nav">
            <Link to={'/news'} className="header__nav__link">
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
