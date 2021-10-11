
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';

import Products from './pages/Products/';
import ProductsByName from './pages/ProductsByName/';
import SignIn from './pages/SignIn';



function Routes() {
    return(
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/products/name/:name">
                    <ProductsByName />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/signin">
                    <SignIn />                    
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
