import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/login'
import AdminPage from './page/adminPage';
import NotFound from './page/notFound';
import UserPage from './page/userPage';
import ProfilePage from './page/profilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='/adminDashboard' element={<AdminPage />} />
        <Route path='/userDashboard' element={<UserPage />} />
        <Route path='/editProfile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
