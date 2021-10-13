
import { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../components/Header';

import Products from '../pages/Products';
import ProductsByCategory from '../pages/ProductsByCategory';
import ProductsByName from '../pages/ProductsByName';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

import connector, { Props } from './connector';



function Routes( { auth, token, tokenAuthentication }: Props) {
    useEffect( () => {
        tokenAuthentication();
    }, []);

    useEffect( () => {
        if(auth)
            localStorage.setItem( 'token', token );
        else
            localStorage.removeItem( 'token' )
    }, [auth] );

    return(
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/products/name/:name">
                    <ProductsByName />
                </Route>
                <Route path="/products/category/:id">
                    <ProductsByCategory />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/signin">
                    <SignIn />                    
                </Route>
                <Route path="/register">
                    <Register />                    
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default connector(Routes);
