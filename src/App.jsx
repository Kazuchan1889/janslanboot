import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/login'
import AdminPage from './page/adminPage';
import NotFound from './page/notFound';
import UserPage from './page/userPage';
import Abt from './page/About';
import Prog from './page/program';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='/adminDashboard' element={<AdminPage />} />
        <Route path='/userDashboard' element={<UserPage />} />
        <Route path='/About' element={<Abt />} />
        <Route path='/Prog' element={<Prog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
