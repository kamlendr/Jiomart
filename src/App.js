import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { TopCatBar, NavBar } from './Components';
import Routes from './Routes';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <TopCatBar />
      <Routes />
    </div>
  );
}
export default App;
