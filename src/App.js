import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Friends from './pages/Friends';
import Home from './pages/Home';
import { Message } from './pages/Message';
import { News } from './pages/News';
import { Search } from './pages/Search';
import { EditProfile } from './pages/EditProfile';
import { Auth } from './pages/Auth';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/im" element={<Message />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/news" element={<News />} />
          <Route path="/search" element={<Search />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
