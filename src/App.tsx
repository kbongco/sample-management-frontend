import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login';
import DashBoardContent from './Screens/Scientist-Dashboard/DashBoard-Content/DashBoardContent';
import NavBar from './Layout/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitSamples from './Screens/SubmitSamples/SubmitSamples';

function App() {
  return (
    <>
      <div className='chbi-navbar-content'>
        <NavBar />
        <Routes>
          {/* <DashBoardContent /> */}
          <Route path='/' element={<DashBoardContent />} />
          <Route path='/submit-samples' element={<SubmitSamples/>}/>
        </Routes>
      </div>
      </>
  );
}

export default App;
