import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { TopCatBar, NavBar, SideNavBar, Routes } from './Components';
import { Context } from './Components/Context/ContextProvider';
import NavigationBar from './Components/Navigation/NavigationBar';
function App() {

  const [sideBarVisible, setSideBarVisible] = useState(false);
  const { setcartPopUpVisible } = useContext(Context);

useEffect(() => {
  setcartPopUpVisible(true)
}, [setcartPopUpVisible])

  return (
    <div className='App'>
      
        <header className='nav-container'>
          <div className='sticky-nav'>
            <NavigationBar setSideBarVisible={setSideBarVisible}  />
            <section className='top-cat-bar'>
              <TopCatBar />
            </section>
          </div>
          <SideNavBar
            sideBarVisible={sideBarVisible}
            setSideBarVisible={setSideBarVisible}
          />
        </header>
        <main>
          <Routes />
        </main>
        <footer className='footer-container'>footer</footer>
    </div>
  );

}
export default App;
