
import Authentication from './Authentication';
import Products from './Products';
import Header from './Header';
import Account from './Account';
import StateLoading from './Loading';



interface GlobalState {
    authentication: Authentication,
    account: Account,
    products: Products,
    header: Header,
    loading: StateLoading
}


export default GlobalState;
