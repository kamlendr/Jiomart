import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {FreshFruits, FreshVegetables } from './Components';
import {Flours} from "./Components/Flours/Flours"
import {Biscuits} from "./Components/Biscuits/Biscuits"

function Routes() {
  return (
      <Switch>
        <Route exact path='/'>
          <h1>HOMEPAGE</h1>
        </Route>

        <Route path='/FruitsVegetables/FreshVegetables'>
            <FreshVegetables/>
        </Route>
        <Route path='/FruitsVegetables/FreshFruits'>
            <FreshFruits/>
        </Route>

        <Route path='/FruitsVegetables'>
          <h1>FruitsVegetables</h1>
        </Route>


        <Route path='/DairyBakery'>
          <h1>DairyBakery</h1>
        </Route>
        <Route path='/Staples' exact>
          <h1>Staples</h1>
        </Route>
        <Route path="/Staples/AttaFloursSooji">
            <Flours />
        </Route>
        <Route path='/HomeCare'>
          <h1>HomeCare</h1>
        </Route>
        <Route path='/SnacksBrandedFoods' exact>
          <h1>SnacksBrandedFoods</h1>
        </Route>
        <Route path="/SnacksBrandedFoods/BiscuitsCookies">
            <Biscuits />
        </Route>
        <Route path='/Beverages'>
          <h1>Beverages</h1>
        </Route>
        <Route path='/PersonalCare'>
          <h1>PersonalCare</h1>
        </Route>
        <Route path='/BabyCare'>
          <h1>BabyCare</h1>
        </Route>
        <Route path='/HomeKitchen'>
          <h1>HomeKitchen</h1>
        </Route>
      </Switch>
  );
}
export default Routes;
