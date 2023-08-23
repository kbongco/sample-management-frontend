import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login';
import DashBoardContent from './Screens/Scientist-Dashboard/DashBoard-Content/DashBoardContent';
import NavBar from './Layout/NavBar/NavBar';

function App() {
  return (
    <>
      <div className='chbi-navbar-content'>
        <NavBar />
        <DashBoardContent/>
      </div>
      </>
  );
}

export default App;
