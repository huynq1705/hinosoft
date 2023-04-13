import React from 'react';
import './App.css';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Attendance from './pages/attendance/Attendance'
import History from './pages/attendance_history/History'
import Maintenance from './pages/maintenance/Maintenance'
import Attendance_detail from './pages/attendance-detail/Attendance-detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forget from './pages/forget/Forget';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='forget' element={<Forget />} />
          <Route path='register' element={<Register />} />
          <Route path='attendance' element={<Attendance />} />
          <Route path='attendance_history' element={<History />} />
          <Route path='attendance_detail' element={<Attendance_detail />} />
          <Route path='maintenance' element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
