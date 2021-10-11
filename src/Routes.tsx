
import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Products from './pages/Products';
import ProductsByName from './pages/ProductsByName';



function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/products/name/:name">
                    <ProductsByName />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
