import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Login } from '../components/Login';
import { selectIsAuth } from '../redux/slices/auth';
import { useSelector } from 'react-redux';

const MainLayout = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    if (pathname === '/') {
      if (window.localStorage.getItem('token')) {
        navigate('/news');
      } else {
        navigate('/auth');
      }
    }
  }, []);

  return (
    <div className="wrapper">
      <Header pathname={pathname} />
      <div className="content">
        {isAuth ? <Sidebar /> : <Login />}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
