
import { useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


import Product from '../pages/Product';
import Products from '../pages/Products';
import ProductsByCategory from '../pages/ProductsByCategory';
import ProductsByName from '../pages/ProductsByName';

import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

import Account from '../pages/Account';
import AccountFavorites from '../pages/AccountFavorites';

import connector, { Props } from './connector';

import AccountAddress from '../pages/AccountAddress';
import AccountAddresses from '../pages/AccountAddresses';
import AccountAddressesRegister from '../pages/AccountAddressesRegister';
import AccountCart from '../pages/AccountCart';
import Loading from '../pages/Loading';



function Routes({ auth, token, loading, tokenAuthentication }: Props) {

    useEffect(() => {
        tokenAuthentication();
    }, [tokenAuthentication]);

    useEffect(() => {
        auth
            ? localStorage.setItem('token', token)
            : localStorage.removeItem('token')
    }, [auth, token]);



    return (<>
        {loading && <Loading />}
        <BrowserRouter>
            <Switch>
                <Route exact path="/signin">
                    {auth ? <Redirect to="/" /> : <SignIn />}
                </Route>
                <Route exact path="/register">
                    {auth ? <Redirect to="/" /> : <Register />}
                </Route>
        
                <Route exact path="/">
                    <Products />
                </Route>
                <Route exact path="/products/:id">
                    <Product />
                </Route>
                <Route exact path="/products/name/:name">
                    <ProductsByName />
                </Route>
                <Route exact path="/products/category/:id/:name">
                    <ProductsByCategory />
                </Route>
                
                <Route exact path="/account">
                    <Account />
                </Route>
                <Route exact path="/account/favorites">
                    <AccountFavorites />
                </Route>
                <Route exact path="/account/addresses">
                    <AccountAddresses />
                </Route>
                <Route exact path="/account/addresses/register">
                    <AccountAddressesRegister />
                </Route>
                <Route exact path="/account/address/:id" >
                    <AccountAddress />
                </Route>
                <Route exact path="/account/cart">
                    <AccountCart />
                </Route>
            </Switch>
        </BrowserRouter>
    </>);
}

export default connector(Routes);
