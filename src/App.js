import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { TopCatBar, NavBar } from './Components';
import Routes from './Routes';

import { FreshFruits } from './Components/Fruits/FreshFruits';
import { NavBar } from './Components/Navbar/Navbar';
import { FreshVegetables } from './Components/Vegetables/Vegetables';
import {Flours} from "./Components/Flours/Flours"
import {Biscuits} from "./Components/Biscuits/Biscuits"

function App() {
  return <div className='App'>
      <NavBar/>
       <TopCatBar />
      <FreshFruits />
      <FreshVegetables />
      <Flours />
      <Biscuits />
      <Routes />

  </div>;
}
export default App;
