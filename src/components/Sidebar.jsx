import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <ul>
          <li>
            <Link to={'/'} className="sidebar__link">
              Моя страница
            </Link>
          </li>
          <li>
            <Link to={'/friends'} className="sidebar__link">
              Мои друзья
            </Link>
          </li>
          <li>
            <Link to={'/'} className="sidebar__link">
              Мои сообщения
            </Link>
          </li>
          <li>
            <Link to={'/'} className="sidebar__link">
              Мои новости
            </Link>
          </li>
        </ul>
      </div>
      <div class="sidebar__line"></div>
      <div className="sidebar__menu">
        <ul>
          <li>
            <Link to={'/'} className="sidebar__link">
              Ред. профиль
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
