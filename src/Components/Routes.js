import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  SearchResultPage,
  FreshFruits,
  FreshVegetables,
  Products,
  ProductLayout,
} from './index';

function Routes({ popUpState }) {
  return (
    <div className='contentContainer'>
      <Switch>
        <Route exact path='/'>
          <h1>HOMEPAGE</h1>
        </Route>
        <Route path='/search/:id' component={SearchResultPage} />
        <Route exact path='/fruits-vegetables'>
          <ProductLayout mainCat='fruits-vegetables' />
        </Route>
        <Route path='/fruits-vegetables/:id' component={ProductLayout} />
        <Route exact path='/dairy-bakery'>
          <ProductLayout mainCat='dairy-bakery' />
        </Route>
        <Route path='/dairy-bakery/:id' component={ProductLayout} />
        <Route exact path='/staples'>
          <ProductLayout mainCat='staples' />
        </Route>
        <Route path='/staples/:id' component={ProductLayout} />
        <Route exact path='/snacks-branded-foods'>
          <ProductLayout mainCat='snacks-branded-foods' />
        </Route>
        <Route path='/snacks-branded-foods/:id' component={ProductLayout} />
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
