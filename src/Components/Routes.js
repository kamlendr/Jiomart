import React from 'react';
import LandingPage from './landingPage/LandingPage';
import { Switch, Route, useParams } from 'react-router-dom';
import { FreshFruits, Products, ProductLayout } from './index';
import {SingleProduct} from "./SingleProduct/SingleProduct"
import {FreshVegetables} from "./Vegetables/Vegetables"
import {LoginPage} from "./LoginPage/LoginPage"
import { Cart } from './Cart/cart';

function Routes( ) {

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
        <Route path="/:category/:id">
          <SingleProduct />
        </Route>
        <Route path='/fruits-vegetables/fresh-fruits'>
          <ProductLayout />
        </Route>
        {/* <Route path='/fruits-vegetables'>
          <h1>FruitsVegetables</h1>
        </Route> */}
        <Route exact path='/dairy-bakery'>
          <ProductLayout mainCat='Dairy & Bakery' />
        </Route>
        <Route path='/dairy-bakery/:id' component={ProductLayout} />
        <Route exact path='/staples'>
          <ProductLayout mainCat='Staples' />
        </Route>
        <Route path='/staples/:id' component={ProductLayout} />
        <Route exact path='/home-care'>
          <ProductLayout mainCat='Home Care' />
        </Route>
        <Route path='/home-care' component={ProductLayout} />
        <Route exact path='/snacks-branded-foods'>
          <ProductLayout mainCat='Snacks & Branded Foods' />
        </Route>
        <Route path='/snacks-branded-foods/:id' component={ProductLayout} />
        <Route exact path='/beverages'>
          <ProductLayout mainCat='Beverages' />
        </Route>
        <Route path='/beverages/:id' component={ProductLayout} />
        <Route exact path='/personal-care'>
          <ProductLayout mainCat='Personal Care' />
        </Route>
        <Route path='/personal-care/:id' component={ProductLayout} />
        <Route exact path='/baby-care'>
          <ProductLayout mainCat='Baby Care' />
        </Route>
        <Route path='/baby-care/:id' component={ProductLayout} />
        <Route exact path='/home-kitchen'>
          <ProductLayout mainCat='Home & Kitchen' />
        </Route>
        <Route path='/home-kitchen/:id' component={ProductLayout} />
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
// import React from 'react';
// import { Switch, Route} from 'react-router-dom';
// import {FreshFruits, FreshVegetables,Products,ProductLayout } from './index';

// function Routes() {
//   return (
// <div className="contentContainer">
//         <Switch>
//           <Route exact path='/'>
//             <h1>HOMEPAGE</h1>
//           </Route>
//           <Route path='/fruits-vegetables/fresh-vegetables'>
//               <FreshVegetables/>
//           </Route>
//           <Route path='/fruits-vegetables/fresh-fruits'>
//             <Products/>
//           </Route>
//           <Route path='/fruits-vegetables'>
//             <h1>FruitsVegetables</h1>
//           </Route>
//           <Route exact path='/dairy-bakery'>
//             <h1>DairyBakery</h1>
//           </Route>
//           <Route path='/dairy-bakery/:id' component={ Products } />
//           <Route exact path='/staples'>
//             <h1>Staples</h1>
//           </Route>
//           <Route path='/staples/:id' component={Products} />
//           <Route exact path='/home-care'>
//             <h1>HomeCare</h1>
//           </Route>
//           <Route path='/home-care' component={Products} />
//           <Route exact path='/snacks-branded-foods'>
//             <Products/>
//           </Route>
//           <Route path='/snacks-branded-foods/:id' component={Products} />
//           <Route exact path='/beverages'>
//             <Products mainCat="beverages"/>
//           </Route>

//           <Route path='/beverages/:id' component={Products} />
//           <Route exact path='/personal-care'>
//             <h1>PersonalCare</h1>
//           </Route>
//           <Route path='/personal-care/:id' component={Products} />
//           <Route exact path='/baby-care'>
//             <h1>BabyCare</h1>
//           </Route>
//           <Route path='/baby-care/:id' component={Products} />
//           <Route exact path='/home-kitchen'>
//             <h1>HomeKitchen</h1>
//           </Route>
//           <Route path='/home-kitchen/:id' component={Products} />
//         </Switch>

// </div>
//   );
// }
// export default Routes;
