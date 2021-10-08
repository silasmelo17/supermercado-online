
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Products from './pages/Products';
import ProductsByName from './pages/ProductsByName';



function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/products/name/:name">
                    <ProductsByName />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
