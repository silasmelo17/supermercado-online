
import Authentication from './Authentication';
import Products from './Products';
import Header from './Header';
import Account from './Account';



interface GlobalState {
    authentication: Authentication,
    account: Account,
    products: Products,
    header: Header
}


export default GlobalState;
