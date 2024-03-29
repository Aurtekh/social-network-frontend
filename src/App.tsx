import './scss/app.scss';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Friends from './pages/Friends';
import { Home } from './pages/Home';
import { Message } from './pages/Message';
import { News } from './pages/News';
import { Search } from './pages/Search/Search';
import { EditProfile } from './pages/EditProfile';
import { Auth } from './pages/Auth';

import { fetchAuthMe } from './redux/slices/auth';
import { NotFound } from './pages/NotFound';
import { useAppDispatch } from './redux/store';
import { Dialogs } from './pages/Dialogs';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  React.useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      navigate('/auth');
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/:id" element={<Home />} />
          <Route path="/im" element={<Dialogs />} />
          <Route path="/im/:id" element={<Message />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/news" element={<News />} />
          <Route path="/search" element={<Search />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
