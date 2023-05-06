import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Friends from './pages/Friends';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
