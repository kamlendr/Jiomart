import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { FreshFruits, Products, ProductLayout } from './index';
import {SingleProduct} from "./SingleProduct/SingleProduct"
import {FreshVegetables} from "./Vegetables/Vegetables"
import {LoginPage} from "./LoginPage/LoginPage"
import { Cart } from './Cart/cart';
import {Flours} from "./Flours/Flours"
import {Biscuits} from "./Biscuits/Biscuits"
import {LandingPage} from "./landingPage/LandingPage"
import {
  SearchResultPage,
} from './index';


function Routes({ popUpState }) {

  return (
    <div className='contentContainer'>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>

        <Route path="/fruits-vegetables/fresh-fruits" exact>
            <FreshFruits />
        </Route>
        <Route path='/fruits-vegetables/fresh-vegetables' exact>
          <FreshVegetables />
        </Route>
        <Route path="/staples/atta-flours-sooji" exact>
            <Flours />
        </Route>
       
        <Route path='/fruits-vegetables/fresh-fruits'>
          <ProductLayout />
        </Route>
        <Route path="/snacks-branded-foods/biscuits-cookies" exact>
            <Biscuits />
        </Route>

        <Route path='/search/:id' component={SearchResultPage} />
        <Route exact path='/fruits-vegetables'>
          <ProductLayout mainCat='fruits-vegetables' />
        </Route>
        <Route path='/fruits-vegetables/:id' component={ProductLayout}>
          
          </Route> 
        <Route exact path='/dairy-bakery'>
          <ProductLayout mainCat='dairy-bakery' />
        </Route>
        <Route path='/dairy-bakery/:id' component={ProductLayout} />
       
        <Route exact path='/staples'>
          <ProductLayout mainCat='staples' />
        </Route>

        <Route path="/:category/:id">
          <SingleProduct />
        </Route>
       
        <Route path='/staples/:id' component={ProductLayout} />
        <Route exact path='/snacks-branded-foods'>
          <ProductLayout mainCat='snacks-branded-foods' />
        </Route>
        {/* <Route path='/snacks-branded-foods/:id' component={ProductLayout} /> */}
       
        <Route exact path='/beverages'>
          <ProductLayout mainCat='beverages' />
        </Route>
        <Route path='/beverages/:id' component={ProductLayout} />

        <Route exact path='/personal-care'>
          <ProductLayout mainCat='personal-care' />
        </Route>
        <Route path='/personal-care/:id' component={ProductLayout} />
        <Route exact path='/home-care'>
          <ProductLayout mainCat='home-care' />
        </Route>
        <Route path='/home-care/:id' component={ProductLayout} />
        <Route exact path='/baby-care'>
          <ProductLayout mainCat='baby-care' />
        </Route>
        <Route path='/baby-care/:id' component={ProductLayout} />
        <Route exact path='/home-kitchen'>
          <ProductLayout mainCat='home-kitchen' />
        </Route>
        <Route path='/home-kitchen/:id' component={ProductLayout} />
        <Route path='/:id' component={SingleProduct} />

        <Route exact path='/signIn'>
          <LoginPage/>
        </Route>
        <Route exact path='/cart'>
         <Cart/>
        </Route>
      </Switch>
    </div>
  );
}
export default Routes;


