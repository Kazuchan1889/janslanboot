import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/login'
import AdminPage from './page/adminPage';
import NotFound from './page/notFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='/adminDashboard' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
