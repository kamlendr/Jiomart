import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect,Link } from 'react-router-dom';
import './App.css';
import { TopBar } from './Components/categoryTab';


function App() {
  return <div className='App'>
    <Link to="/">
      <h1>JIOMART</h1>
    </Link>
    <TopBar/>
<Switch>
<Route exact path="/" >
  <h1>HOMEPAGE</h1>
</Route>
<Route path="/FruitsVegetables" >
  <h1>FruitsVegetables</h1>
</Route>
<Route path="/DairyBakery" >
  <h1>DairyBakery</h1>
</Route>
<Route path="/Staples" >
  <h1>Staples</h1>
</Route>
<Route path="/HomeCare" >
  <h1>HomeCare</h1>
</Route>
<Route path="/SnacksBrandedFoods" >
  <h1>SnacksBrandedFoods</h1>
</Route>
<Route path="/Beverages" >
  <h1>Beverages</h1>
</Route>
<Route path="/PersonalCare" >
  <h1>PersonalCare</h1>
</Route>
<Route path="/BabyCare" >
  <h1>BabyCare</h1>
</Route>
<Route path="/HomeKitchen" >
  <h1>HomeKitchen</h1>
</Route>





</Switch>


    
    </div>;
}

export default App;
