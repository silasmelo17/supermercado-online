
import { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from '../components/Header';
import AccountFavorites from '../pages/AccountFavorites';

import Products from '../pages/Products';
import ProductsByCategory from '../pages/ProductsByCategory';
import ProductsByName from '../pages/ProductsByName';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

import connector, { Props } from './connector';



function Routes( { auth, token, tokenAuthentication }: Props) {
    useEffect( () => {
        tokenAuthentication();
    }, [ tokenAuthentication ]);

    useEffect( () => {
        auth 
            ? localStorage.setItem( 'token', token )
            : localStorage.removeItem( 'token' )
    }, [auth, token] );

    return(
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Products />
                </Route>
                <Route exact path="/signin">
                    { auth ? <Redirect to="/" /> : <SignIn /> }
                </Route>
                <Route exact path="/register">
                    { auth ? <Redirect to="/" /> : <Register /> }                    
                </Route>
                <Route exact path="/products/name/:name">
                    <ProductsByName />
                </Route>
                <Route exact path="/products/category/:id">
                    <ProductsByCategory />
                </Route>
                <Route exact path="/account/favorites">
                    { auth ? <AccountFavorites />: <Redirect to="/signin" />}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default connector(Routes);
