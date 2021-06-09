import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect,Link } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/Navbar/Navbar';

function App() {
  return <div className='App'>
      <NavBar/>

  </div>;
}

export default App;
