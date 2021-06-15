import React, { useState } from 'react';
import './App.css';
// import { TopCatBar } from './Components';
// import Routes from './Routes';

import {
  TopCatBar,
 
  SideNavBar,
  Routes
} from './Components';
import {Footer1} from "./Components/Footer/Footer"

import { NavBar } from './Components/Navbar/Navbar';


function App() {

  const [sideBarVisible, setSideBarVisible] = useState(false);
  return (
    <div className='App'>
      <header className='nav-container'>
        <NavBar setSideBarVisible={setSideBarVisible} />
        <section className='top-cat-bar'>
          <TopCatBar  />
        </section>
        <SideNavBar
          sideBarVisible={sideBarVisible}
          setSideBarVisible={setSideBarVisible}
        />
      </header>
      <main>
        <Routes />
      </main>
      <footer className='footer-container'>
        <Footer1/>
      </footer>
    </div>
  );

}
export default App;
