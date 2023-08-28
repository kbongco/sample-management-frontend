import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/Login';
import DashBoardContent from './Screens/Scientist-Dashboard/DashBoard-Content/DashBoardContent';
import NavBar from './Layout/NavBar/NavBar';

function App() {
  return (
    <>
      <div className='chbi-layout-container'>
        <div className='chbi-layout-nav-bar'>
          <NavBar/>
        </div>
        <div className='chbi-layout-content'>
          <h1>Hello</h1>
        </div>
        {/* <NavBar /> */}
        {/* <DashBoardContent/> */}
      </div>
      </>
  );
}

export default App;
