import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { TopCatBar, NavBar } from './Components';
import Routes from './Routes';
import {Footer1} from "./Components/Footer/Footer"
function App() {
  return (
    <div className='App'>
      <NavBar />
      <TopCatBar />
      <Routes />
      <Footer1/>
    </div>
  );
}
export default App;
