import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/landingPage/LandingPage';
import { NavBar } from './Components/Navbar/Navbar';

function App() {
  return <div className='App'>
    <NavBar />
    <LandingPage />

  </div>;
}

export default App;
