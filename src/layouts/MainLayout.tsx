import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Login } from '../components/Login';
import { selectIsAuth } from '../redux/slices/auth';
import { useSelector } from 'react-redux';
import { SkeletonsSidebar } from '../components/Skeletons/SkeletonsSidebar';
import { RootState } from '../redux/store';

const MainLayout = () => {
  const navigate = useNavigate();
  // const Auth = useSelector((state: RootState) => state.auth);
  const pathname = window.location.pathname;
  const isAuth = useSelector(selectIsAuth);
  // const isAuthLoading = Auth.status;
  // React.useEffect(() => {
  //   if (pathname === '/') {
  //     if (window.localStorage.getItem('token')) {
  //       navigate('/news');
  //     } else {
  //       navigate('/auth');
  //     }
  //   }
  // }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* {isAuthLoading === 'loading' ? (
          <SkeletonsSidebar />
        ) : isAuthLoading === 'success' && isAuth ? (
          <Sidebar />
        ) : (
          <Login />
        )} */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
