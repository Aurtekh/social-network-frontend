import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <ul>
          <li>
            <Link to={'/'}>Моя страница</Link>
          </li>
          <li>
            <Link to={'/friends'}>Мои друзья</Link>
          </li>
          <li>
            <Link to={'/'}>Мои сообщения</Link>
          </li>
          <li>
            <Link to={'/'}>Мои новости</Link>
          </li>
        </ul>
      </div>
      <div class="sidebar__line"></div>
      <div className="sidebar__menu">
        <ul>
          <li>
            <Link to={'/'}>Ред. профиль</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
