import React from 'react';
import logo from '../assets/img/logoOld.jpg';
import { logout, selectIsAuth } from '../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({ pathname }) => {
  const isMeId = useSelector((state) => state.auth.data);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/auth');
    }
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper__left">
          <Link
            to={isAuth ? `/id${isMeId._id || ''}` : '/auth'}
            style={{ display: 'block', height: '20px' }}>
            <img className="header__logo" src={logo} alt="Олдтакте" />
          </Link>
          {/* {isAuth && <input type="search" placeholder="Поиск" />} */}
        </div>
        {isAuth && (
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
            <div className="header__nav" onClick={onClickLogout}>
              выйти
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
