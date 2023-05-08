import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Login } from '../components/Login';

const MainLayout = () => {
  const pathname = window.location.pathname; //нужно пофиксить перерисовку

  return (
    <div className="wrapper">
      <Header pathname={pathname} />
      <div className="content">
        {pathname === '/auth' ? <Login /> : <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
