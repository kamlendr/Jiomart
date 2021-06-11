import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect,Link } from 'react-router-dom';
import './App.css';
import { FreshFruits } from './Components/Fruits/FreshFruits';
import { NavBar } from './Components/Navbar/Navbar';
import { FreshVegetables } from './Components/Vegetables/Vegetables';

function App() {
  return <div className='App'>
      <NavBar/>
      <FreshFruits />
      <FreshVegetables />
  </div>;
}

export default App;
